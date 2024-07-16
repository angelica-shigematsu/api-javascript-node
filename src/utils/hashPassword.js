import dotenv from 'dotenv'

dotenv.config()

import bcrypt from 'bcrypt'

export default class HashPassword {
  
  transferHashPassword = async(password) => {

    return bcrypt.hash(password, Number(process.env.SALTROUNDS))
  }
  
  comparatePassword = async(password) => {
    return bcrypt.compare(password, user.password)
  }
}