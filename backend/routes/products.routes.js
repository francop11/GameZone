import express from "express"
import products ,{ createProduct }from "../controllers/products.controller.js"


const routerProducts=express.Router()

routerProducts.get("/",products)

routerProducts.post("/",createProduct)


export default routerProducts