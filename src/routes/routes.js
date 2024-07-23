import { Router } from "express";
import { createBook, getBooks } from "../controllers/controllers.js";

const bookRouter = Router();

bookRouter.get("/all", getBooks);
bookRouter.post("/", createBook);

export { bookRouter };
