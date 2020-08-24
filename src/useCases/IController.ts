import {Request, Response} from "express";

export interface IController {
    handle(request: Request, response: Response, next?: any): Promise<Response>
}