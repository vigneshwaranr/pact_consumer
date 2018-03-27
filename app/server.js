import BookService from './services/bookService'
import express from 'express'

export default function buildServer(bookServiceUrl) {
    let bookService = new BookService(bookServiceUrl)

    let app = express().use(express.json())

    let wrap = fn => (...args) => fn(...args).catch(args[2])

    app.get('/users/:id', wrap(async (req, res) => {
        res.json({
            id: req.params.id,
            name: "John Doe",
            favoriteBooks: await bookService.getBooks(1,2,3)
        })
    }))

    app.use(function (err, req, res, next) {
        console.error(err.stack)
        res.status(500).json({
            error: err.message
        })
    })

    return app
}