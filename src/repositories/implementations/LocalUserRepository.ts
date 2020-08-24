import {IUserRepository} from "../IUserRepository";
import {User} from "../../entities/User";

class LocalUserRepository implements  IUserRepository{
    private users: User[] = [];

    async findByEmail(email: string): Promise<User> {
        return this.users.find(user => user.email === email);
    }

    async save(user: User): Promise<void> {
         this.users.push(user)
    }

    async delete(email: string): Promise<void> {
        this.users = this.users.filter( user => user.email !== email)
    }

    async update(email: string, user: User): Promise<void> {
        return undefined;
    }
}

const localUserRepository = new LocalUserRepository();

export {localUserRepository};