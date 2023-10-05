import DataSource from'../db/connection.js'
import jwt from 'jsonwebtoken'
const userRepository = DataSource.getRepository("User")

const login = async(req, res) => {
  const { email } = req.body
  const { password } = req.body

  try{

    const user = await userRepository.findOne({where: { email }})

    if (!user) throw new Error('Error token')
    
    if(password === user.password) {
      const token = jwt.sign({id: user.id }, process.env.SECRET_KEY, {
        expiresIn: '3h'
      })
      return res.status(200).json({ auth: true, token: token})
    } 
  } catch(error) {
    res.status(404).json(error.message)
  }
}

const logout = (req, res) => {
  res.json({ auth: false, token: null });
}

export const AuthController =  { login, logout }