"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const CreateUserController_1 = require("./controllers/user/CreateUserController");
const AuthUserController_1 = require("./controllers/user/AuthUserController");
const DetailUserController_1 = require("./controllers/user/DetailUserController");
const CreateCategoryController_1 = require("./controllers/category/CreateCategoryController");
const ListCategoryContreller_1 = require("./controllers/category/ListCategoryContreller");
const CreateProductController_1 = require("./controllers/products/CreateProductController");
const LIstByCategoruController_1 = require("./controllers/products/LIstByCategoruController");
const CreateOrderController_1 = require("./controllers/order/CreateOrderController");
const RemoveOrderController_1 = require("./controllers/order/RemoveOrderController");
const AddItemsController_1 = require("./controllers/items/AddItemsController");
const RemoveItemsControllers_1 = require("./controllers/items/RemoveItemsControllers");
const SendOrderController_1 = require("./controllers/order/SendOrderController");
const ListOrderController_1 = require("./controllers/order/ListOrderController");
const DetailOderController_1 = require("./controllers/order/DetailOderController");
const FinishOrderController_1 = require("./controllers/order/FinishOrderController");
const isAuthenticated_1 = require("./middlewares/isAuthenticated");
const multer_2 = __importDefault(require("./config/multer"));
const router = (0, express_1.Router)();
exports.router = router;
const upload = (0, multer_1.default)(multer_2.default.upload("./tmp"));
router.post("/users", new CreateUserController_1.CreateUserController().handle);
router.post("/session", new AuthUserController_1.AuthUserController().hanlde);
router.get("/me", isAuthenticated_1.isAuthenticated, new DetailUserController_1.DetailUserController().handle);
//rotas category
router.post("/category", isAuthenticated_1.isAuthenticated, new CreateCategoryController_1.CreateCategoryController().hanlde);
router.get("/category", isAuthenticated_1.isAuthenticated, new ListCategoryContreller_1.ListCategoryContreller().hanlde);
//rotas products
// router.post("/product",isAuthenticated,upload.single("file"), new CreateProductController().handle);
router.post("/product", isAuthenticated_1.isAuthenticated, new CreateProductController_1.CreateProductController().handle);
router.get("/category/product", isAuthenticated_1.isAuthenticated, new LIstByCategoruController_1.ListByCategorycontroller().handle);
//rotas order
router.post("/order", isAuthenticated_1.isAuthenticated, new CreateOrderController_1.CreateOrderController().handle);
router.delete("/order", isAuthenticated_1.isAuthenticated, new RemoveOrderController_1.RemoveOrderController().handle);
router.post("/order/add", isAuthenticated_1.isAuthenticated, new AddItemsController_1.AddItemsController().handle);
router.delete("/order/remove", isAuthenticated_1.isAuthenticated, new RemoveItemsControllers_1.RemoveItemsControllers().handle);
router.put("/order/send", isAuthenticated_1.isAuthenticated, new SendOrderController_1.SendOrderController().handle);
router.get("/orders", isAuthenticated_1.isAuthenticated, new ListOrderController_1.ListOrderController().handle);
router.get("/order/detail", isAuthenticated_1.isAuthenticated, new DetailOderController_1.DetailOderController().handle);
router.put("/order/finish", isAuthenticated_1.isAuthenticated, new FinishOrderController_1.FinishOrderController().handle);
