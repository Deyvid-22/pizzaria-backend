import prismaClient from "../../prisma";

interface OrderRequeste{
    table:number;
    name:string
}

class CreateOderService{
    async execute({table,name}:OrderRequeste){
       const order = await prismaClient.order.create({
        data:{
            table:table,
            name:name
        }
       })

       return order;
    }
}
export {CreateOderService}