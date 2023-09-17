import routes from './routes.js'
import connection from'./db/connection.js'
import express from 'express'

const app = express()

import dotenv from 'dotenv'
dotenv.config()

app.use((req, res, next) => {

  res.header("Access-Control-Allow-Origin", `${process.env.URL}`);// dentro do '*' poderia ser qual site poderia fazer a requisiçao.

  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");

  res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization");

  next();

})

app.use(express.json())

connection.initialize().then(() => console.log('DB connected')).catch((error) => console.error(error))

app.use(routes)

app.listen(process.env.PORT, () =>  {
  console.log('Working')
})



