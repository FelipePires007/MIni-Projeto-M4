import { books } from "../database/database.js";
import { Book } from "../models/models.js";

export const getBooks = (req, res) => {
    res.status(200).send(books);
};

export const createBook = (req, res) => {
    const newBook = req.body;

    const dadoFormatado = new Book(
        newBook.id,
        newBook.title,
        newBook.author
    );

    books.push(dadoFormatado);

    res.status(201).send(`O Livro ${dadoFormatado.title} foi criado com sucesso!`);
};
