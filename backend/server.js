import conectDb from "./config/db.js"
import dotenv from "dotenv"
import app from "./app.js"
dotenv.config()

const port=process.env.PORT || 8080
const startServer = async () => {
    await conectDb()

    app.listen(port, () => {
        console.log("servidor corriendo en el puerto " + port)
    })
}

startServer()