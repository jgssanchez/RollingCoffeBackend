import mongoose, { Schema } from "mongoose";

const productoSchema = new Schema({
  nombreProducto: {
    type: String,
    required: true,
    minLength: 4,
    maxlength: 50,
    unique: true,
  },
  precio: { type: Number, required: true, min: 100, maxlength: 10000 },
  descripcionProducto: {
    type: String,
    required: true,
    minLength: 4,
    maxlength: 50,
  },
  imagen: {
    type: String,
    required: true,
    validate: {
      validator: (dato) => {
        const pattern = /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)$/;
        return pattern.test(dato);
      },
    },
  },
  descripcion_breve: {
    type: String,
    required: true,
    minLength: 10,
    maxlength: 50,
  },
  descripcion_amplia: {
    type: String,
    required: true,
    minLength: 30,
    maxlength: 300,
  },
  categoria:{
    type: String,
    required: true,
    enum: ['Infusiones', 'Batidos','Dulce', 'Salado']
  }
});
  const Producto = mongoose.model("producto", productoSchema)
  export default Producto;