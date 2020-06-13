import express from 'express';
import knex from './database/connections';

import PointsController from './controllers/pointsController';
import ItensController from './controllers/itensController';

const routes = express.Router();
const pointsController = new PointsController();
const itensController = new ItensController();

routes.get('/itens', itensController.index);

routes.post('/points', pointsController.create);

export default routes;