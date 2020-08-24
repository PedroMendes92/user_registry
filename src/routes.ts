import {Request, Response, Router} from "express";
import {createUserController} from "./useCases/CreateUser";
import {getUserController} from "./useCases/GetUser";
import {deleteUserController} from "./useCases/DeleteUser";
import {authenticateUserController} from "./useCases/AuthenticateUser";
import {checkUserAuthenticationController} from "./useCases/CheckUserAuthentication";
import {updateUserController} from "./useCases/UpdateUser";

const router = Router();

router.post('/user', (req:Request, res:Response) => createUserController.handle(req,res));
router.post('/auth', (req:Request, res:Response) => authenticateUserController.handle(req,res))

router.use( (req, res, next) => checkUserAuthenticationController.handle(req, res, next) )

router.get('/user', (req:Request, res:Response) => getUserController.handle(req,res));
router.delete('/user', (req:Request, res:Response) => deleteUserController.handle(req,res));
router.put('/user', (req:Request, res:Response) => updateUserController.handle(req,res));

export {router}