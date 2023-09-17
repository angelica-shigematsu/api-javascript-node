import express from 'express'
import { UserController } from './controllers/UserController.js'

const routes = express()

routes.use(express.json())

routes.get('/user', UserController.listAllUsers)
routes.post('/user', UserController.createSignup)

export default routes

