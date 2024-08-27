// 1. importaciones
const express = require("express")
const app = express()

require("dotenv").config();

// 2. Middlewares
// Todas las peticiones y respuestas se manejan en protocolo JSON
app.use(express.json())

// 3. Rutas

// 4. Server
app.listen(process.env.PORT, () => {
    console.log(`Servidor trabajando en ${process.env.PORT}`);
    
})