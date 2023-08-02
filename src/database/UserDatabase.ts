import { UserDB } from "../interface";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
    public static TABLE_USERS = "users"

    public findUsersByName = async (q?: string): Promise<UserDB[]> => {
        let result: UserDB[]
        if (q) {
            result = await BaseDatabase
                .connection(UserDatabase.TABLE_USERS)
                .where("name", "LIKE", `%${q}%`)
        } else {
            result = await BaseDatabase
                .connection(UserDatabase.TABLE_USERS)
        }
        return result
    }

}