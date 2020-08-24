import {IAuthenticationDTO} from "./AuthenticationDTO";
import {IUserRepository} from "../../repositories/IUserRepository";
import {IPasswordEncryption} from "../../providers/IPasswordEncryption";
import {IAuthenticationProvider} from "../../providers/IAuthenticationProvider";

export class AuthenticateUserUseCase {
    constructor(
        private userRepository: IUserRepository,
        private passwordEncryption: IPasswordEncryption,
        private authenticationProvider: IAuthenticationProvider
    ) {}

    async execute(data: IAuthenticationDTO): Promise<string>{
        const user = await this.userRepository.findByEmail(data.email)
        if(!user){
            throw new Error('User not found');
        }
        if(!await this.passwordEncryption.compare(user.password, data.password)){
            throw new Error('Invalid Password');
        }

        return this.authenticationProvider.authenticate(data.email)
    }
}