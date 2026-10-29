import express from "express"
import router from "./routes/index.routes.js";
import routerProducts from "./routes/products.routes.js";


const app=express()
app.use(express.json());
app.use("/api/v1",router)
app.use("/api/v1/products",routerProducts)


export default app