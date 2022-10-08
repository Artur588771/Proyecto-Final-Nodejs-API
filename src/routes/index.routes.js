import { Router } from "express";
import { methods as campeonController } from "./../controllers/campeon.controller"

const router = Router();

router.get("/", campeonController.getCampeones); // GET http://localhost:5000/api-restfull/products/
router.get("/:id", campeonController.getCampeon); // GET http://localhost:5000/api-restfull/products/:sku
router.post("/", campeonController.createCampeon); // POST http://localhost:5000/api-restfull/products/
router.put("/:id", campeonController.updateCampeon); // PUT http://localhost:5000/api-restfull/products/:sku
router.delete("/:id", campeonController.deleteCampeon);// DELETE http://localhost:5000/api-restfull/products/:sku

export default router;