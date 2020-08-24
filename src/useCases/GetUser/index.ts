import {GetUserUseCase} from "./GetUserUseCase";
import {GetUserController} from "./GetUserController";
import {localUserRepository} from "../../repositories/implementations/LocalUserRepository";
import {SQLUserRepository} from "../../repositories/implementations/SQLUserRepository";

const getUserUseCase = new GetUserUseCase( SQLUserRepository );

const getUserController = new GetUserController( getUserUseCase )

export {getUserUseCase, getUserController};