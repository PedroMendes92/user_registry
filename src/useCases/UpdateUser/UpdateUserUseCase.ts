import {IUserRepository} from "../../repositories/IUserRepository";
import {IGetUserRequestDTO} from "./UpdateUserDTO";

export class UpdateUserUseCase {
    constructor(
        private userRepository: IUserRepository
    ) {
    }

    async execute(data: IGetUserRequestDTO): Promise<void>{
        const user = await this.userRepository.findByEmail(data.email)
        Object.keys(data.newData).forEach( entry => user[entry] = data.newData[entry])
        await this.userRepository.update(data.email, user);
    }
}