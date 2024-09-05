import { request, Request, response, Response } from "express";
import { CreateProductService } from "../../service/products/CreateProductService";

import {v2 as cloudinary, UploadApiResponse} from "cloudinary"
import { UploadedFile } from "express-fileupload";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret:process.env.CLOUDINARY_SCRET
})

class CreateProductController{

    async handle(req:Request,res:Response){

        const {name, price, description, category_id} = req.body

        const createProductService = new CreateProductService();
        
         if(!req.files || typeof req.files !== 'object' || Array.isArray(req.files) || Object.keys(req.files).length === 0){
            throw new Error("error upload file image");
            
         }else{

         const file:any = req.files['file'] 
         
        const resultfile:any = await new Promise((resolve,reject)=>{
            cloudinary.uploader.upload_stream({},function (error,result){
                if(error){
                    reject(error);
                    return
                }
                resolve(result)
            }).end(file.data)
        })
             console.log(resultfile)
             
             const product = await createProductService.execute({name, price, description,banner:resultfile.url, category_id})
             
             return res.json(product);
         }


    }

}

export { CreateProductController}