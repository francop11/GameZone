import express from "express"

const router=express.Router()

router.get("/",(req,res)=>{
    res.json({
        msg:"bienvenido a game zone",
        estado:"servidor funcionando"
    })

})

export default router