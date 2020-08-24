import {IUserRepository} from "../../repositories/IUserRepository";
import {ICreateUserRequestDTO} from "./CreateUserDTO";
import {User} from "../../entities/User";
import {IPasswordEncryption} from "../../providers/IPasswordEncryption";

export class CreateUserUseCase {
    constructor(
        private userRepository: IUserRepository,
        private passwordEncryption : IPasswordEncryption
    ) {
    }

    async execute(data: ICreateUserRequestDTO){
        const userAlreadyExits = await this.userRepository.findByEmail(data.email);

        if(userAlreadyExits){
            throw new Error('User Already exists');
        }

        data.password = await this.passwordEncryption.encrypt(data.password);

        const user = new User(data);

        await this.userRepository.save(user);
    }
}