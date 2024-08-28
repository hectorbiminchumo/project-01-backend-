// 1. Importaciones
const express =require("express")
const router = express.Router()

const bookController = require("./../controllers/bookController")

// 2. Ruteo
router.post("/create", bookController.create)


// 3. Exportaciones
module.exports = router