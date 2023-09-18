import typeorm from 'typeorm';
import UserSchema from '../entity/User.js'
import LogShema from '../entity/User.js'
import dotenv from 'dotenv'
dotenv.config()

var dataSource = new typeorm.DataSource({
    type: process.env.POSTGRES_TYPE,
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    synchronize: false,
    entities: ['src/entity/*js'],
    migrations: ['migrations/*js'],
    cli: {
        entitiesDir: 'src/entity',
        migrationsDir: 'migrations'
    }
})

export default dataSource