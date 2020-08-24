import {ICheckUserAuthenticationDTO} from "./CheckUserAuthenticationDTO";
import {IUserRepository} from "../../repositories/IUserRepository";
import {IAuthenticationProvider} from "../../providers/IAuthenticationProvider";

export class CheckUserAuthenticationUseCase {
    constructor(
        private userRepository: IUserRepository,
        private authenticationProvider: IAuthenticationProvider
    ) {}

    async execute(data: ICheckUserAuthenticationDTO): Promise<boolean>{
        return await this.authenticationProvider.isAuthenticated(data.type, data.credential)
    }
}