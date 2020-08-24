import {Request, Response} from "express";
import {GetUserUseCase} from "./GetUserUseCase";
import {IController} from "../IController";

export class GetUserController implements IController{
    constructor(
        private getUserUseCase: GetUserUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response>{
        const {
            email,
        } = request.body;

        try {
            const user = await this.getUserUseCase.execute({ email });

            return response.status(200).send(user);
        }catch (err) {
            return response.status(400).send({
                message: err.message || 'Unexpected error'
            });
        }
    }
}