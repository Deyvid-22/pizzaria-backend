import prismaClient from "../../prisma";
import { hash } from "bcryptjs"

interface UserRequest {
    name:string;
    email:string;
    password:string;
}

class CreateUserService {
    async execute({name,email,password}:UserRequest){

        if(!email) throw new Error("Email incorrect");
        
        //busca email no banco de dados
        const userAlreadyExists = await prismaClient.user.findFirst({
            where:{
                email:email
            }
        })

        // se email existe throw new Error("User already exists")
        if(userAlreadyExists)  throw new Error("User already exists");

        
        // criptografa a senha         (senha, padrão de criptografia)
        
         const passwordHash = await hash(password,8);

        //cria um usuario no banco de dados
        const user = await prismaClient.user.create({
            data:{
                name: name,
                email:email,
                password: passwordHash, //senha criptografada
            },

            //voce tem que dizer o que deve retorna senão ele devolve senhae outro dados sensivel

            //devolvendo os dados com select
            select:{
                id:true,
                name:true,
                email:true,
            }
        })
         
        return user

    }
}

export { CreateUserService };