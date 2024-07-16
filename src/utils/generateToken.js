import jwt from 'jsonwebtoken'

export default function generateToken(id){
  return jwt.sign({ id }, process.env.SECRET_KEY_JWT, {
        expiresIn: '3h'
  })
} 