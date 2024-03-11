import  express  from "express";
import "dotenv/config";
import cors from "cors";
import morgan from "morgan";
console.log("hola mundo")

//1- configurar puerto
const app =express();
app.set("port", process.env.PORT || 4000);
app.listen(app.get("port"), ()=>{
    console.log("Servidor corriendo en el puerto: "+app.get("port"));
});
//2- definir los middlewares
app.use(cors()); //permite conexiones remotas
app.use(morgan("dev")); //nos muestra info extra en la trminal
app.use(express.json());//parsea los datos que vienen en formato json
app.use(express.urlencoded({extended : true}));//para poder hacer peticiones de tipo POST y tener acceso a los datos deñ request

//3 configurar rutas
app.get("/nuevo/producto",(req,res)=>{
console.log("aqui obtener la lista de los productos");
res.send("Aqui enviaremos la lista de productos")

})
 
