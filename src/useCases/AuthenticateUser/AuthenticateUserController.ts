import {IController} from "../IController";
import {Request, Response} from "express";
import {AuthenticateUserUseCase} from "./AuthenticateUserUseCase";


export class AuthenticateUserController implements IController {
    constructor(
        private authenticateUserUseCase :AuthenticateUserUseCase
    ){}

    async handle(request: Request, response: Response): Promise<Response> {
        const {
            email,
            password
        } = request.body;

        try {
            const token = await this.authenticateUserUseCase.execute({email, password});
            response.status(200).send({token})
        }catch (err) {
            return response.status(401).send({
                message: err.message || 'Unexpected error'
            });
        }
    }


}