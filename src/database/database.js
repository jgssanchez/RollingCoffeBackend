import mongoose, { Mongoose } from "mongoose";
import "dotenv/config";

const mongoURI = process.env.MONGODB_URI;
mongoose.connect(mongoURI);

const datosConexion = mongoose.connection;

datosConexion.once("open", () => {
  console.log("Conexion a la base de datos establecida");
});