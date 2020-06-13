import express from 'express';
import knex from './database/connections';

import PointsController from './controllers/pointsController';

const routes = express.Router();
const pointsController = new PointsController();

routes.get('/itens', async (request, response) =>{
    const itens = await knex('itens').select('*');

    const serializedItens = itens.map(item => {
        return {
            id: item.id,
            title: item.title,
            image_url: `http://localhost:3333/uploads/${item.image}`,
        };
    });

    return response.json(serializedItens);   
});

routes.post('/points', pointsController.create);

export default routes;