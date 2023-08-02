import express, { Request, Response } from 'express'
import cors from "cors"
import { UserController } from './database/controller/UserController'
import { userRouter } from './router/userRouter'

const app = express()
app.use(cors())
app.listen(3003, ()=> {
    console.log(`Servidor rodando na porta ${3003}`)
})

app.get("/ping",async (req:Request, res: Response) => {
    try {
        res.status(200).send({message: "PingPoong"})
    } catch (error) {
        console.log(error)
        if(req.statusCode===200) {
            res.status(500)
        }
        if(error instanceof Error) {
            res.send(error.message)
        } else {
            res.send("Erro inesperado")
        }
    }
})

app.use("/users", userRouter)
