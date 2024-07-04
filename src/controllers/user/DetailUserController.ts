import { Request, Response } from "express";
import { DetailUserService } from "../../service/user/DetailUserService";

class DetailUserController {
    async handle(req:Request,res:Response){
       
        //esse user_id vem do @types que foi definido
        const user_id = req.user_id

        const detailUserService = new DetailUserService();

        const user = await detailUserService.execute()

        return res.json(user)
    }
}

export {DetailUserController}