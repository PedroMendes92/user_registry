import {UpdateUserUseCase} from "./UpdateUserUseCase";
import {UpdateUserController} from "./UpdateUserController";
import {localUserRepository} from "../../repositories/implementations/LocalUserRepository";
import {SQLUserRepository} from "../../repositories/implementations/SQLUserRepository";

const updateUserUseCase = new UpdateUserUseCase( SQLUserRepository );

const updateUserController = new UpdateUserController( updateUserUseCase )

export {updateUserUseCase, updateUserController};