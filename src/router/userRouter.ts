import express from "express"
import { UserController } from "../database/controller/UserController"
export const userRouter = express.Router()

const userController = new UserController()

userRouter.get('/', userController.getUsers)
