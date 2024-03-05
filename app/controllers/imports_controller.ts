import User from '#models/user'
import { importValidator } from '#validators/import'
import { HttpContext } from '@adonisjs/core/http'
import { readFile } from 'node:fs/promises'
import {
  UserData,
  dataToAddress,
  dataToInformation,
  dataToUser,
} from '../scripts/import_user_data.js'

export default class ImportsController {
  async store({ request }: HttpContext) {
    const { data } = await request.validateUsing(importValidator)

    if (data?.tmpPath) {
      const file = await readFile(data.tmpPath, { encoding: 'utf-8' })
      const usersData: UserData[] = JSON.parse(file)

      usersData.forEach(async (userData) => {
        const userPayload = dataToUser(userData)
        const addressPayload = dataToAddress(userData)
        const informationPayload = dataToInformation(userData)

        const user = await User.create(userPayload)
        await user.related('address').create({ userId: user.id, ...addressPayload })
        await user.related('information').create({ userId: user.id, ...informationPayload })
      })
    }
  }
}
