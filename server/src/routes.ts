import express from 'express';
import knex from './database/connections';

const routes = express.Router();

routes.get('/itens', async (request, response) =>{
    const itens = await knex('itens').select('*');

    // const serializedItens = ;

    return response.json(itens);
});

export default routes;