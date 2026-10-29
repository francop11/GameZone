import Products from "../models/product.js"


 const product =  async (req,res) => {
    try{

        const todoLosProductos = await Products.find()
        res.json(todoLosProductos)
    }
    catch(err){
        res.status(500).json({msg:"error interno del servidor"})
    }
    
} 


const createProduct = async (req, res) => {
    try {
       const productosCreados = await Products.create(req.body)
       res.status(201).json(productosCreados)
    } catch (err) {
     
      if (err.name === "ValidationError") {
            const errores = Object.values(err.errors).map(error => ({
                campo: error.path,
                mensaje: error.message
            }));

            return res.status(400).json({
                msg: "Error de validación",
                errores
            });
        }

        res.status(500).json({
            msg: "Error interno del servidor"
        });
}

}


export default product
export { createProduct }
