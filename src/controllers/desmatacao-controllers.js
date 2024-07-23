import { deforestations } from "../database/desmatacao-database";
import { Deforestation } from "../models/desmatacao-models";

export const getDeforestations = (req, res) => {
    res.status(200).send(deforestations);
};

export const createDeforestation = (req, res) => {
    const newDeforestation = req.body;
    
    const dadoFormatado = new Deforestation(
        newDeforestation.ano,
        newDeforestation.informacao
    );

    deforestations.push(dadoFormatado);

    res.status(201).send(`O Desmatamento ${dadoFormatado.informacao} foi criado com sucesso!`);
};