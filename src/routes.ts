import { Router } from "express"
import multer from "multer";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryContreller } from "./controllers/category/ListCategoryContreller";
import { CreateProductController } from "./controllers/products/CreateProductController";

import { isAuthenticated } from "./middlewares/isAuthenticated";

import uploadConfig from "./config/multer";


const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));

router.post("/users", new CreateUserController().handle);

router.post("/session", new AuthUserController().hanlde);

router.get("/me",isAuthenticated, new DetailUserController().handle);

//rotas category

router.post("/category",isAuthenticated, new CreateCategoryController().hanlde);
router.get("/category",isAuthenticated, new ListCategoryContreller().hanlde);

//rotas products

router.post("/product",isAuthenticated,upload.single("file"), new CreateProductController().handle);


export {router};