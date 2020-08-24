import {IUserRepository} from "../../repositories/IUserRepository";
import {IGetUserRequestDTO} from "./GetUserDTO";
import {User} from "../../entities/User";

export class GetUserUseCase {
    constructor(
        private userRepository: IUserRepository
    ) {
    }

    async execute(data: IGetUserRequestDTO): Promise<User>{
        const user = await this.userRepository.findByEmail(data.email);

        if(!user){
            throw new Error('User does not exists');
        }
         return user;
    }
}