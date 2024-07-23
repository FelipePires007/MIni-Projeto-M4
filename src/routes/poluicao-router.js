// poluicao-router.js
import express from "express";
import { createPollution, getPollutions } from "../controllers/poluicao-controllers.js";

const router = express.Router();

router.get('/', getPollutions);
router.post('/', createPollution);

export { router as pollutionRouter };
