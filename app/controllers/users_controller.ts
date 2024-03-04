import User from '#models/user'
import { createAddressValidator, updateAddressValidator } from '#validators/address'
import { createInformationValidator, updateInformationValidator } from '#validators/information'
import { createUserValidator, updateUserValidator } from '#validators/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class UsersController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    const users = await User.query().preload('address').preload('information')

    return users
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {
    const userPayload = await request.validateUsing(createUserValidator)
    const addressPayload = await request.validateUsing(createAddressValidator)
    const informationPayload = await request.validateUsing(createInformationValidator)

    const user = await User.create(userPayload)
    await user.related('address').create({ userId: user.id, ...addressPayload })
    await user.related('information').create({ userId: user.id, ...informationPayload })
    await user.load('address')
    await user.load('information')
    return user
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {
    const user = await User.findOrFail(params.id)

    await user.preload('address')
    await user.preload('information')

    return user
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {
    const userPayload = await request.validateUsing(updateUserValidator)
    const addressPayload = await request.validateUsing(updateAddressValidator)
    const informationPayload = await request.validateUsing(updateInformationValidator)

    const user = await User.findOrFail(params.id)

    await user.load('address')
    await user.load('information')

    user.merge(userPayload)
    user.address.merge(addressPayload)
    user.information.merge(informationPayload)

    user.save()

    return user
  }

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {
    const user = await User.findOrFail(params.id)

    await user.delete()
  }
}
