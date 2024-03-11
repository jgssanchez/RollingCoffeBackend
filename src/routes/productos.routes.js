import { Router } from "express";
import { ListarProductos } from "../controllers/productos.controller.js";

const router = Router();
router.route("/nuevo/producto").get(ListarProductos);

export default router;