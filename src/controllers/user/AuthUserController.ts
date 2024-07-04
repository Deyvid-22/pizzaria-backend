import { Request, Response } from "express";
import { AuthUserService } from "../../service/user/AuthUserService";

class AuthUserController {

    async hanlde(req:Request,res:Response){
        const {email,password} = req.body as {email:string,password:string}

        const authUserService = new AuthUserService();

        const auth = await authUserService.execute({email,password})

        return res.json(auth) 
    }
}

export {AuthUserController}