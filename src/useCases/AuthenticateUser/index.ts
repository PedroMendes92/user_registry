import {localUserRepository} from "../../repositories/implementations/LocalUserRepository";
import {AuthenticateUserUseCase} from "./AuthenticateUserUseCase";
import {AuthenticateUserController} from "./AuthenticateUserController";
import {Bcrypt} from "../../providers/implementations/Bcrypt";
import {JWT} from "../../providers/implementations/JWT";
import {SQLUserRepository} from "../../repositories/implementations/SQLUserRepository";

const authenticateUserUseCase = new AuthenticateUserUseCase(
    SQLUserRepository,
    new Bcrypt(),
    JWT
);

const authenticateUserController = new AuthenticateUserController(
    authenticateUserUseCase
)

export {authenticateUserUseCase,authenticateUserController};