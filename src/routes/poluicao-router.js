import { Router } from "express";
import { cratePollution, getPollutions } from "../controllers/poluicao-controllers.js";

const pollutionRouter = Router();

pollutionRouter.get("/all", getPollutions);
pollutionRouter.post("/", cratePollution);

export { pollutionRouter };