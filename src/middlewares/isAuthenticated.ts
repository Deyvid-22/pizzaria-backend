import { Request,Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
interface payLoad{
  sub:string;
}

// vai ser usado para todas rotas que o usuario tem que ser logado

export function isAuthenticated(
    req:Request,
    res:Response,
    next:NextFunction
)
{
  //receber token
  const authToken = req.headers.authorization;

  if(!authToken){
    return res.status(401).end();
  }
  
  
  
  //validar esse token
  if(!authToken) return res.status(401).end();
  
  const [, token] = authToken.split(" ");
  
  if(!process.env.JWT_SECRET)  throw new Error("Variavel de ambiente não existe");
  

  try{
      const { sub } = verify(token,process.env.JWT_SECRET) as payLoad;
     //recuperar o id do token e coloca de uma variavel user_id dentro do req
      req.user_id = sub;

      return next();

  }catch(err){
     return res.status(401).end();
  }
 
}
