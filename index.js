import  express  from "express";
console.log("hola mundo")

//1- configurar puerto
const app =express();
app.set("port", process.env.PORT || 4000);
app.listen(app.get("port"), ()=>{
    console.log("Servidor corriendo en el puerto: "+app.get("port"));
});
//2- definir los middlewares

//