// import crypto from "crypto";
// import multer from "multer";

// import { extname, resolve } from "path";

// export default{
//     upload(folder:string){
//        return{
//         Storage: multer.diskStorage({
//             destination:resolve(__dirname, '..', '..', folder),
//             filename:(request,file,callback)=>{
//                 const fileHash = crypto.randomBytes(16).toString("hex");
//                 const fileName = `${fileHash}-${file.originalname}`;

//                 return callback(null, fileName)
//             }
//         })
//        }
//     }
// }


import crypto from "crypto";
import multer, { StorageEngine } from "multer";
import { extname, resolve } from "path";

const uploadConfig = {
  upload(folder: string) {
    return {
      storage: multer.diskStorage({
        destination: resolve(__dirname, "..", "..", folder),
        filename: (request, file, callback) => {
          const fileHash = crypto.randomBytes(16).toString("hex");
          const fileName = `${fileHash}-${file.originalname}`;

          return callback(null, fileName);
        },
      }) as StorageEngine, // Defina o tipo como StorageEngine
    };
  },
};

export default uploadConfig;

