import {IUserRepository} from "../IUserRepository";
import {User} from "../../entities/User";
import { db } from '../../db/connection'


class UserRepository implements IUserRepository{
    constructor(
       private userTableName: string
    ) {}
    async delete(email: string): Promise<void> {
        await db(this.userTableName)
            .where(`${this.userTableName}.email`, '=', email)
            .delete();
    }

    async findByEmail(email: string): Promise<User> {
        const userData = await db(this.userTableName)
            .where(`${this.userTableName}.email`, '=', email);
        if(userData.length === 0){
            return null;
        }
        return new User(userData[0]);
    }

    async save(user: User): Promise<void> {
        await db(this.userTableName).insert({
            email: user.email,
            id: user.id,
            name: user.name,
            password: user.password
        });
    }

    async update(email: string, user: User): Promise<void> {
        await db(this.userTableName)
            .where(`${this.userTableName}.email`, '=', email)
            .update({
                email: user.email,
                name: user.name
            });
    }
}

const SQLUserRepository = new UserRepository('users');

export {SQLUserRepository};