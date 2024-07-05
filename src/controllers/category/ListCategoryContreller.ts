import { Request,Response } from "express";
import { ListCategoryService } from "../../service/category/ListCatogoryService";

class ListCategoryContreller{
   async hanlde(req: Request,res:Response){

    const listCategoryService = new ListCategoryService()

    const category = await listCategoryService.execute();

    return res.json(category);
      
   }
}

export {ListCategoryContreller}
