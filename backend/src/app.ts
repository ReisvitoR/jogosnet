import "reflect-metadata"
import express, { Request, Response } from "express"
import { AppDataSource } from "./data_source"

const app = express()

AppDataSource.initialize().then(() => {

}).catch((error) => console.log(error))



app.use(express())

app.listen(3000, () =>{
    console.log("Server is running in http://localhost:3000")
})



