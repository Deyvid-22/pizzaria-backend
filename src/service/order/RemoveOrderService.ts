import prismaClient from "../../prisma";

interface OrderRequeste{
    order_id: string;
}

class RemoveOrderService{
    async execute({order_id}:OrderRequeste){

        const order = await prismaClient.order.delete({
            where:{
                id:order_id
            }
        })

        return order;
        
    }
}

export {RemoveOrderService}