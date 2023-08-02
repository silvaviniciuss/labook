import { Users } from "../../models/Users"
import { UserDatabase } from "../UserDatabase"

export class UserBusiness {
    public getUsers = async (input:any) => {
        const {q} = input
        
        const userDatabase = new UserDatabase()

        const usersDB = await userDatabase.findUsersByName(q)

        const users: Users[] = usersDB.map((userDB) => new Users(
            userDB.id,
            userDB.name,
            userDB.email,
            userDB.password,
            userDB.role,
            userDB.created_at
        ))

        return users
    }
}