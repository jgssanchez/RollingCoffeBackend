import Producto from "../database/models/producto";
export const ListarProductos = async(req,res)=>{
    try {
        //pedir a la bd la lista de productos
        const productos = await Producto.find();
        res.status(200).json(productos);

        // responer al front con el array de los productos
        res.status(200).json(productos)
    } catch (error) {
        console.error(error);
        res.status(400).json({
            mensaje: "error al obtener la lista de productos"
        })
    }


};
export const obtenerProductos = async(req,res)=>{
    try {
       const productoBuscado = await Producto.findById(req.params.id)
       if (!productoBuscado){
        return res.status(404).json({
           mensaje : 'No se ha encontrado un producto con ese ID'
         });   
       }
       res.status(200).json(productoBuscado);

    } catch (error) {
        console.error(error);
        res.status(400).json({
            mensaje: "error al obtener el producto"
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
export const editarProductos = async(req,res)=>{
    try {
       const productoBuscado = await Producto.findById(req.params.id)
       if (!productoBuscado){
        return res.status(404).json({
           mensaje : 'No se ha encontrado un producto con ese ID'
         });   
       }
       await Producto.findByIdAndUpdate(req.params.id, req.body)
       res.status(200).json({mensaje:"el producto due editado correctamente"});


    } catch (error) {
        console.error(error);
        res.status(500).json({
            mensaje: "error al editar el producto"
        })
    };


};
export const borrarProductos = async(req,res)=>{
    try {
       const productoBuscado = await Producto.findById(req.params.id)
       if (!productoBuscado){
        return res.status(404).json({
           mensaje : 'No se ha encontrado un producto con ese ID'
         });   
       }
       await Producto.findByIdAndDelete(req.params.id, req.body)
       res.status(200).json({mensaje:"el producto due borrado correctamente"});
    }
     catch (error) {
    console.error(error);
    res.status(500).json({
        mensaje: "error al borrar el producto"
    })};
};