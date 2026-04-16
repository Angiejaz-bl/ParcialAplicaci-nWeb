import { Router } from "express";
import { LibroController } from "../controllers/LibroController";

const router = Router();
const c = new LibroController();

router.post("/libros", c.crear);
router.get("/libros", c.listar);
router.get("/libros/disponibles", c.disponibles);
router.get("/libros/:id", c.buscarPorId);
router.put("/libros/:id", c.actualizar);
router.delete("/libros/:id", c.eliminar);

export default router;