// desmatacao-controllers.js
import { deforestations } from "../database/desmatacao-database.js";

export const getDeforestations = (req, res) => {
    res.json(deforestations);
};
