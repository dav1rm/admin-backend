import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class UsersController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {
    const users = User.all()

    return users
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {
    const userData = request.only([
      'name',
      'email',
      'password',
      'cpf',
      'rg',
      'postcode',
      'street',
      'number',
      'neighborhood',
      'city',
      'state',
      'mother',
      'father',
      'sign',
      'gender',
      'height',
      'weight',
      'blood_type',
      'color',
      'cellphone',
      'telephone',
      'birthday',
    ])

    const user = User.create(userData)

    return user
  }

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {
    const user = await User.findOrFail(params.id)

    // await user.load('images')

    return user
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {
    const userData = request.only([
      'name',
      'email',
      'password',
      'cpf',
      'rg',
      'postcode',
      'street',
      'number',
      'neighborhood',
      'city',
      'state',
      'mother',
      'father',
      'sign',
      'gender',
      'height',
      'weight',
      'blood_type',
      'color',
      'cellphone',
      'telephone',
      'birthday',
    ])

    const user = await User.findOrFail(params.id)
    user.merge(userData)

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
