import {IUserRepository} from "../../repositories/IUserRepository";
import {IGetUserRequestDTO} from "./DeleteUserDTO";

export class DeleteUserUseCase {
    constructor(
        private userRepository: IUserRepository
    ) {
    }

    async execute(data: IGetUserRequestDTO): Promise<void>{
        await this.userRepository.delete(data.email);
    }
}