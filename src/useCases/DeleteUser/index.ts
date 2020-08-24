import {DeleteUserUseCase} from "./DeleteUserUseCase";
import {DeleteUserController} from "./DeleteUserController";
import {localUserRepository} from "../../repositories/implementations/LocalUserRepository";
import {SQLUserRepository} from "../../repositories/implementations/SQLUserRepository";

const deleteUserUseCase = new DeleteUserUseCase( SQLUserRepository );

const deleteUserController = new DeleteUserController( deleteUserUseCase )

export {deleteUserUseCase, deleteUserController};