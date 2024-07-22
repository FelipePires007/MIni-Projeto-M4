import {Router} from "express"

import {createBook, getBooks} from "../controllers/controllers.js";

const bookRouter = Router();

bookRouter.get("/book/all", getBooks);

bookRouter.post("/book", createBook);

export {bookRouter};