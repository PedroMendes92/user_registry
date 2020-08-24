import {localUserRepository} from "../../repositories/implementations/LocalUserRepository";
import {CheckUserAuthenticationUseCase} from "./CheckUserAuthenticationUseCase";
import {CheckUserAuthenticationController} from "./CheckUserAuthenticationController";
import {JWT} from "../../providers/implementations/JWT";
import {SQLUserRepository} from "../../repositories/implementations/SQLUserRepository";

const checkUserAuthenticationUseCase = new CheckUserAuthenticationUseCase(
    SQLUserRepository,
    JWT
);

const checkUserAuthenticationController = new CheckUserAuthenticationController(
    checkUserAuthenticationUseCase
)

export {checkUserAuthenticationUseCase,checkUserAuthenticationController};