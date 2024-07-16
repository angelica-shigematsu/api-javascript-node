import DataSource from'../db/connection.js'

import dotenv from 'dotenv'
dotenv.config()

import generateToken from '../utils/generateToken.js'
import HashPassword from '../utils/hashPassword.js'

const userRepository = DataSource.getRepository("User")

const login = async(req, res) => {
  const { email, password } = req.body

  try{
    const user = await userRepository.findOne({where: { email }})

    if (!user) throw new Error('Error token')
    
    if(!HashPassword.comparatePassword(password)) return res.status(400).json({ auth: false })
    
    const token = generateToken(user.id)

    return res.status(200).json({ auth: true, token: token})
  } catch(error) {
    res.status(404).json(error.message)
  }
}

const logout = (req, res) => {
  res.json({ auth: false, token: null });
}

export const AuthController =  { login, logout }