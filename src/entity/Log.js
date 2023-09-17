import { EntitySchema } from "typeorm";

const LogSchema = new EntitySchema({
  name: "Log",
  tableName: "logs",
  columns: {
    id: {
      primary: true,
      type: "int",
      generated: true
    },
    logDate: { type: "timestamp" },
  },
  relations: {
    users: {
        target: "User",
        type: "one-to-many",
        joinTable: true,
        cascade: true
    },
  }
})

export default LogSchema