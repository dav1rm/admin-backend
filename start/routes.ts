/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const UsersController = () => import('#controllers/users_controller')
const ImportsController = () => import('#controllers/imports_controller')

router.post('/import', [ImportsController, 'store'])

router.resource('users', UsersController).apiOnly()
