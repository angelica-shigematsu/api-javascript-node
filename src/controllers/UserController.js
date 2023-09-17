import DataSource from'../db/connection.js'
const userRepository = DataSource.getRepository("User")

const createSignup = async (req, res) => {

  try {
    const { name, lastname, birthDate, phone, email, password, confirmPassword } = req.body

    const active = true

    const exitsEmail = await userRepository.findOne({where: {email}})

    if (exitsEmail) throw new Error(`Email already exists`)

    if (password != confirmPassword) throw new Error(`Password don't match`)
    
    const user = {
      name,
      lastname,
      birthDate,
      phone,
      email,
      password,
      active
    }
    
    await userRepository.save(user)
      
    res.status(201).json("User went created")
  } catch(error) {
    res.status(400).json(error.message)
  }
}

const listAllUsers = async(req, res) => {
  const users = await userRepository.find()

  res.status(200).json(users)
}

export const UserController = {
  createSignup, 
  listAllUsers
}
