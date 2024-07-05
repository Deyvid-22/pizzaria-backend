import { Request, Response } from "express";
import { CreateOderService } from "../../service/order/CreateOderService";

class CreateOrderController{
    async handle(req:Request,res:Response){

        const { table, name } = req.body;

        const createOrderService = new CreateOderService();

        const order = await createOrderService.execute({table,name});

        return res.json(order);
    }
}

export {CreateOrderController}