import {User} from "../entities/User";

export interface IUserRepository {
    findByEmail(email: string): Promise<User>;
    save(user: User): Promise<void>;
    delete(email: string): Promise<void>;
    update(email: string, user: User): Promise<void>
}