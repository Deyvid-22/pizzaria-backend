import { Router } from "express"
import multer from "multer";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryContreller } from "./controllers/category/ListCategoryContreller";
import { CreateProductController } from "./controllers/products/CreateProductController";
import { ListByCategorycontroller } from "./controllers/products/LIstByCategoruController";
import { CreateOrderController } from "./controllers/order/CreateOrderController";
import { RemoveOrderController } from "./controllers/order/RemoveOrderController";
import { AddItemsController } from "./controllers/items/AddItemsController";
import { RemoveItemsControllers } from "./controllers/items/RemoveItemsControllers";
import { SendOrderController } from "./controllers/order/SendOrderController";
import { ListOrderController } from "./controllers/order/ListOrderController";
import { DetailOderController } from "./controllers/order/DetailOderController";
import { FinishOrderController } from "./controllers/order/FinishOrderController";

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

// router.post("/product",isAuthenticated,upload.single("file"), new CreateProductController().handle);
router.post("/product",isAuthenticated, new CreateProductController().handle);


router.get("/category/product",isAuthenticated, new ListByCategorycontroller().handle)

//rotas order
router.post("/order",isAuthenticated, new CreateOrderController().handle)

router.delete("/order", isAuthenticated,new RemoveOrderController().handle)

router.post("/order/add", isAuthenticated, new AddItemsController().handle)

router.delete("/order/remove",isAuthenticated, new RemoveItemsControllers().handle)

router.put("/order/send", isAuthenticated, new SendOrderController().handle)

router.get("/orders", isAuthenticated, new ListOrderController().handle)

router.get("/order/detail", isAuthenticated, new DetailOderController().handle)

router.put("/order/finish", isAuthenticated, new FinishOrderController().handle)

export {router};