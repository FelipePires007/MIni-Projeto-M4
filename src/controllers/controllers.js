import { books } from "../database/database.js";
import { Book } from "../models/models.js";

export const getBooks = (req, res) => {
    res.status(200).send(books);
    
};

export const createBook =(req, res) => {

const newBook = req.body;

    const dadoFormatado = new Book(
        newBook.id,
        newBook.title,
        newBook.author
    );

books.push(dadosFormado)

res.status(201).send(`O Livro ${dadoFormatado.name} foi criado com sucesso!`)
};