import {DataSource} from "typeorm"
import Product from "./entities/Products"
import dotenv from "dotenv"

dotenv.config()


const nameDB = process.env.NAMEDB
const userDB = process.env.USER_NAME
const passwordDB = process.env.USER_PASSWORD

export const AppDataSource = new DataSource({
    type:"postgres",
    host:"localhost",
    port:5432,
    username:userDB,
    password:passwordDB,
    database:nameDB,
    entities:[Product],
    synchronize:true,


})