import Producto from "../database/models/producto";
export const ListarProductos = (req,res)=>{
console.log("aqui obtener la lista de los productos");
res.send("Aqui enviaremos la lista de productos")

};
export const crearProducto= async(req,res)=>{
    try{
        console.log(req);
        console.log(res.body)

    }catch(error){
        console.error(error);
        res.status(500).json({
            mensaje: "error al crear el producto"
        })
    }
}