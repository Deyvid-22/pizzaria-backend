import prismaClient from "../../prisma";

interface DetailRequeste{
    order_id:string
}

class DetailOrderService {
    async execute({order_id}:DetailRequeste){
      
        const orders = await prismaClient.item.findMany({
            where:{
                order_id:order_id
            },include:{
                product:true,
                order:true
            }
        })

        return orders;
    }
}

export {DetailOrderService}