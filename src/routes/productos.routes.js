import { Router } from "express";
import { ListarProductos, crearProducto, editarProductos, obtenerProductos } from "../controllers/productos.controller.js";

const router = Router();
router.route("/productos").get(ListarProductos).post(crearProducto);
router.route("/productos/:id").get(obtenerProductos).put(editarProductos).delete(borrarProducto)
export default router;