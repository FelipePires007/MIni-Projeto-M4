import { pollutions } from "../database/poluicao-database";
import { Pollution } from "../models/poluicao-models";

export const getPollution = (req, res) => {
    res.status(200).send(pollutions);
};

export const createPollution = (req, res) => {
    const newPollution = req.body;

    const dadoFormatado = new Pollution(
        newPollution.id,
        newPollution.type,
        newPollution.descrition
    );

    pollutions.push(dadoFormatado);

    res.status(201).send(`A informaçao ${dadoFormatado.descrition} foi criada com sucesso!`);
};