import { Router } from "express";
import { ListarProductos, crearProducto, obtenerProductos } from "../controllers/productos.controller.js";

const router = Router();
router.route("/productos").get(ListarProductos).post(crearProducto);
router.route("/productos/:id").get(obtenerProductos)
export default router;