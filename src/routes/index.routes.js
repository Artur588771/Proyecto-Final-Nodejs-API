import { Router } from "express";
import { methods as campeonController } from "./../controllers/campeon.controller"

const router = Router();

router.get("/", campeonController.getCampeones); // GET http://localhost:4000/api-restfull/campeones/
router.get("/:id", campeonController.getCampeon); // GET http://localhost:4000/api-restfull/campeones/:id
router.post("/", campeonController.createCampeon); // POST http://localhost:4000/api-restfull/campeones/
router.put("/:id", campeonController.updateCampeon); // PUT http://localhost:4000/api-restfull/campeones/:id
router.delete("/:id", campeonController.deleteCampeon);// DELETE http://localhost:4000/api-restfull/campeones/:id

export default router;