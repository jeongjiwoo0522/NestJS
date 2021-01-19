import { ConnectionOptions } from "typeorm"

export const createOption: ConnectionOptions = {
   "type": "mysql",
   "host": process.env.DATABASE_HOST,
   "port": 3306,
   "username": process.env.DATABASE_USER,
   "password": process.env.DATABASE_PASSWORD,
   "database": "nest",
   "synchronize": true,
   "logging": false,
   "entities": [
      "src/entity/**/*.ts"
   ]
}