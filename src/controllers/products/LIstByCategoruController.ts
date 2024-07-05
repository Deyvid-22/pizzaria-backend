import { Request,Response } from "express";
import { ListByCategoryService } from "../../service/products/ListByCategoryService";

class ListByCategorycontroller{
    async handle(req:Request,res:Response){

        const category_id = req.query.category_id as string

        const lisByCategpry = new ListByCategoryService();

        const product = await lisByCategpry.execute({
            category_id
        });


        return res.json(product)
    }
}

export {ListByCategorycontroller}