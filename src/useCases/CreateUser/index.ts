import {CreateUserUseCase} from "./CreateUserUseCase";
import {CreateUserController} from "./CreateUserController";
import {localUserRepository} from "../../repositories/implementations/LocalUserRepository";
import {Bcrypt} from "../../providers/implementations/Bcrypt";
import {SQLUserRepository} from "../../repositories/implementations/SQLUserRepository";

const createUserUseCase = new CreateUserUseCase(
    SQLUserRepository,
    new Bcrypt()
);

const createUserController = new CreateUserController( createUserUseCase )

export {createUserUseCase, createUserController};