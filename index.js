// 1. importaciones
const express = require("express")
const app = express()

require("dotenv").config();

// importacion de conexion de db
const connectDB = require('./config/db')

// 2. Middlewares
// Base de datos
connectDB()
// Todas las peticiones y respuestas se manejan en protocolo JSON
app.use(express.json())

// 3. Rutas

// 4. Server
app.listen(process.env.PORT, () => {
    console.log(`Servidor trabajando en ${process.env.PORT}`);
    
})