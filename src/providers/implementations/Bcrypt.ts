import {IPasswordEncryption} from "../IPasswordEncryption";
import bcrypt from "bcryptjs";

export class Bcrypt implements IPasswordEncryption{

    async encrypt(password: string) {
        return await bcrypt.hash(password, 10);
    }

    async compare(encryptedPassword: string, password: string) {
        return await bcrypt.compare(password, encryptedPassword);
    }

}
