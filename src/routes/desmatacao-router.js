// desmatacao-router.js
import express from "express";
import { getDeforestations } from "../controllers/desmatacao-controllers.js";

const router = express.Router();

router.get('/', getDeforestations);

export { router as deforestationRouter };
