import { Router } from "express";
import { ReservaController } from "../controllers/ReservaController";

const router = Router();
const c = new ReservaController();

router.post("/reservas", c.crear);
router.get("/reservas/usuario/:id", c.listar);
router.put("/reservas/:id/cancelar", c.cancelar);
router.put("/reservas/:id/devolver", c.devolver);

export default router;