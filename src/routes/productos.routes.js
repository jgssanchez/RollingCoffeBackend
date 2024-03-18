import { Router } from "express";
import { ListarProductos } from "../controllers/productos.controller.js";

const router = Router();
router.route("/productos").get(ListarProductos).post(crearProducto);

export default router;