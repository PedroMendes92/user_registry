import {IController} from "../IController";
import {Request, Response} from "express";
import {CheckUserAuthenticationUseCase} from "./CheckUserAuthenticationUseCase";


export class CheckUserAuthenticationController implements IController {
    constructor(
        private authenticateUserUseCase :CheckUserAuthenticationUseCase
    ){}

    async handle(request: Request, response: Response, next): Promise<Response> {
        try {
            let authHeader = request.headers.authorization;

            if(!authHeader){
                throw new Error('No token provided');
            }

            const authHeaderArray = authHeader.split(' ');

            if(authHeaderArray.length !== 2){
                throw new Error('Token error');
            }

            const [type, credential] = authHeaderArray;

            if(await this.authenticateUserUseCase.execute({type, credential})) {
                return next()
            }
            throw new Error('Token has expired');
        }catch (err) {
            return response.status(401).send({
                message: err.message || 'Unexpected error'
            });
        }
    }


}