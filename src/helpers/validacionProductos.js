import {check} from 'express-validator';

const validacionProductos= [
    check("nombreProducto")
        .notEmpty()
        .withMessage("el nombre del producto es obligatorio")
        .isLength({ min: 4, max: 50 })
        .withMessage("El nombre debe ser de al menos 4 y máximo 50 caracteres"),
      check("precio")
      .notEmpty()
      .isNumeric()
      .withMessage("Ingrese un precio valido")
      .custom((value)=> {
        if (value > 100 && value <10000;){
        return true;
    } else{
          throw new Error ("El precio debe estar entre 100 y 10000")
       }
      }
]
export default

