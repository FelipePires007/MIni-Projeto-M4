import express from "express";
import { bookRouter } from "./src/routes/routes.js";

const app = express();

app.use(express.json());
app.use('/book', bookRouter);

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Nosso app tá rodando na porta: http://localhost:${PORT}`);
});
