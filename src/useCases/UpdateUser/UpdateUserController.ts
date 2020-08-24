import {Request, Response} from "express";
import {UpdateUserUseCase} from "./UpdateUserUseCase";
import {IController} from "../IController";

export class UpdateUserController implements IController{
    constructor(
        private deleteUserUseCase: UpdateUserUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response>{
        const {
            email,
            newData
        } = request.body;

        try {
            await this.deleteUserUseCase.execute({ email, newData });
            return response.status(200).send();
        }catch (err) {
            return response.status(400).send({
                message: err.message || 'Unexpected error'
            });
        }
    }
}