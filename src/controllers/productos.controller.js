import Producto from "../database/models/producto";
export const ListarProductos = async(req,res)=>{
    try {
        //pedir a la bd la lista de productos
        // responer al front con el array de los productos
    } catch (error) {
        console.error(error);
        res.status(400).json({
            mensaje: "error al obtener la lista de productos"
        })
    }


};
export const crearProducto= async(req,res)=>{
    try{
        const productoNuevo = new Producto(req.body);
        await productoNuevo.save();
        res.status(201).json({
            mensaje: "producto creado"
        })
    }catch(error){
        console.error(error);
        res.status(500).json({
            mensaje: "error al crear el producto"
        })
    }
}