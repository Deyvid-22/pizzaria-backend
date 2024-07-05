import { Request,Response } from "express";
import { AddItemsService } from "../../service/items/AddItemsService";

class AddItemsController{
    async handle(req:Request,res:Response){

        const { order_id, product_id, amount} =req.body

        const addItem = new AddItemsService();

        const order = await addItem.execute({order_id, product_id,amount})

        return res.json(order);

    }
}

export {AddItemsController}