import { Router } from "express";
import { CategoriaController } from "../controllers/CategoriaController";

const router = Router();
const controller = new CategoriaController();

router.post("/categorias", controller.crear.bind(controller));
router.get("/categorias", controller.listar.bind(controller));
router.put("/categorias/:id", controller.actualizar.bind(controller));
router.delete("/categorias/:id", controller.eliminar.bind(controller));

export default router;