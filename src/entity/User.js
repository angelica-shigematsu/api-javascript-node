import { EntitySchema } from 'typeorm';

const UserSchema =  new EntitySchema({
    name: "User", 
    tableName: "users", 
    columns: {
      id: {
        primary: true,
        type: "int",
        generated: true
      },
      name: { type: "varchar" },
      lastname: { type: "varchar" },
      birthDate: { type: "timestamp"},
      phone: { type: "varchar"},
      email: { type: "varchar" },
      password: { type: "varchar" },
      active: { type: "boolean" }
    }
  })

export default UserSchema