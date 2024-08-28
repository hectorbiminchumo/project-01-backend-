exports.create = async (req, res) => {
    const Book = require("./../models/Book")
    
    // Del formulario, creamos variables y asignamos valores
    const { 
        nombre,
        precio,
        color,
        imagen,
        descripcion
    } = req.body

    // Crear un libro en base de datos
    try {
        const newBook = await Book.create({
            nombre,
            precio,
            color,
            imagen,
            descripcion
        })
    // Devolver una respuesta en un formato JSON
        res.json({
            msg: "Libro creado con exito",
            data: newBook
        })

    } catch (error) {
        res.status(500).json({
            msg: "Hubo un error creando el libro",
            error: error
        })
    }
    
}