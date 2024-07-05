import { Request,Response } from "express";
import { ListOrderServer } from "../../service/order/ListOrderServer";

class ListOrderController{
    async handle(req:Request,res:Response){

        const listOrderService = new ListOrderServer();

        const orders = await listOrderService.execute();

        return res.json(orders)

    }
}

export {ListOrderController}