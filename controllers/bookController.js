const Book = require("./../models/Book")

exports.create = async (req, res) => {
    
    // Del formulario, creamos variables y asignamos valores
    const { 
        title,
        price,
        pages,
        image,
        description
    } = req.body

    // Crear un libro en base de datos
    try {
        const newBook = await Book.create({
            title,
            price,
            pages,
            image,
            description
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
exports.readAll = async (req, res) => {
    try {
        const books = await Book.find({})

        res.json({
            msg: "Libros obtenidos con exito",
            data: books
        })

    } catch (error) {

        res.status(500).json({
            msg: "Hubo un error obteniendo los datos",
            error: error
        })
        
    }
}
exports.readOne = async (req, res) => {
    const { id } = req.params

    try {
        const book = await Book.findById(id)

        res.json({
            msg: "Libro obtenido con exito",
            data: book
        })

    } catch (error) {
        res.status(500).json({
            msg: "hubo un error obteniendo los datos.",
            error: error
        })
    }
}
exports.edit = async (req, res) => {
    
    const { id } = req.params
    const {
        title,
        price,
        pages,
        image,
        description
    } = req.body

    try {
        const updatedBook = await Book.findByIdAndUpdate(
            id,
            {
                title,
                price,
                pages,
                image,
                description
            },
            {new: true}
        )
        res.json({
            msg: "Libro actualizado con exito",
            data: updatedBook
        })
    } catch (error) {
        res.status(500).json({
            msg: "Hubo un error con la actualizacion del libro",
            error: error
        })
    }

}
exports.delete = async (req, res) => {

	const { id } = req.params
    
	try {
        
        const deletedBook = await Book.findByIdAndDelete({_id: id})

		res.json({
			msg: "Libro borrado con exito",
			data: deletedBook
		})

	} catch (error) {
		res.status(500).json({
			msg: "Hubo un error borrando el libro",
			error: error
		})
	}

}