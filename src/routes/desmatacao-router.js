import { Router } from "express";
import { createDeforestation, getDeforestations } from "../controllers/desmatacao-controllers";

const deforestationRouter = Router ();

deforestationRouter.get("/all", getDeforestations);
deforestationRouter.post("/", createDeforestation);

export { deforestationRouter };