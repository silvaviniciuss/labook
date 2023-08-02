import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { BaseError } from "../../errors/BaseError";

export class UserController {
    public getUsers = async (req: Request, res: Response) => {
        try {
           
            const input = {
                name: req.query.name
            }

           const userBusiness = new UserBusiness()

           const users = await userBusiness.getUsers(input)

            res.status(200).send(users)

        } catch (error) {
            console.log(error)
            if (req.statusCode === 200) {
                res.status(500)
            }
            if (error instanceof BaseError) {
                res.status(error.statusCode).send(error.message)
            } else {
                res.send("Erro inesperado")
            }
        }
    }
}
