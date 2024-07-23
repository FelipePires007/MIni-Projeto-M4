// poluicao-controllers.js
import { pollutions } from "../database/poluicao-database.js";

export const getPollutions = (req, res) => {
    res.json(pollutions);
};

export const createPollution = (req, res) => {
    const { id, type, description } = req.body;
    const newPollution = new Pollution(id, type, description);
    pollutions.push(newPollution);
    res.status(201).json(newPollution);
};
