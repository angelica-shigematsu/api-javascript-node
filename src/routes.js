import express from 'express'
import { UserController } from './controllers/UserController.js'
import { AuthController } from './controllers/AuthController.js'
import { checkToken } from './utils/checkToken.js'

const routes = express()

routes.use(express.json())

routes.get('/user', checkToken, UserController.listAllUsers)
routes.post('/user', UserController.createSignup)

routes.post('/signin', AuthController.login)
routes.post('/signout', AuthController.logout)

export default routes

