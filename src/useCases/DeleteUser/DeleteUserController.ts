import {Request, Response} from "express";
import {DeleteUserUseCase} from "./DeleteUserUseCase";
import {IController} from "../IController";

export class DeleteUserController implements IController{
    constructor(
        private deleteUserUseCase: DeleteUserUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response>{
        const {
            email,
        } = request.body;

        try {
            await this.deleteUserUseCase.execute({ email });
            return response.status(200).send();
        }catch (err) {
            return response.status(400).send({
                message: err.message || 'Unexpected error'
            });
        }
    }
}