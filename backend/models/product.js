import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  precio: {
    type: Number,
    required: true,
    min: 0,
  },
  stock: {
    type: Number,
    required: true,
    min: 0,
    default: 0,
  },
  categoria: {
    type: String,
    required: true,
    enum: ["consolas", "videojuegos", "accesorios"],
  },
  descripcion: {
  type: String,
  default: "",
},
imagen: {
  type: String,
  default: "",
}
});


const Product=mongoose.model("Product",productSchema)
export default Product