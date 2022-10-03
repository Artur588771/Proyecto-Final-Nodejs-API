import { Router } from "express";
import { methods as productController } from "./../controllers/product.controller"

const router = Router();

router.get("/", productController.getProducts); // GET http://localhost:5000/api-restfull/products/
router.get("/:sku", productController.getProduct); // GET http://localhost:5000/api-restfull/products/:sku
router.post("/", productController.createProduct); // POST http://localhost:5000/api-restfull/products/
router.put("/:sku", productController.updateProduct); // PUT http://localhost:5000/api-restfull/products/:sku
router.delete("/:sku", productController.deleteProduct);// DELETE http://localhost:5000/api-restfull/products/:sku

export default router;