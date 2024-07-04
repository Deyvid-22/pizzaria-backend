import { Request, Response } from "express";
import { DetailUserService } from "../../service/user/DetailUserService";

class DetailUserController {
    async handle(req:Request,res:Response){
       
        //esse user_id vem do @types que foi definido
        const user_id = req.user_id

        console.log("id do user_id", user_id)

        const detailUserService = new DetailUserService();

        const user = await detailUserService.execute(user_id)

        return res.json(user)
    }
}

export {DetailUserController}