import express from 'express';

import PointsController from './controllers/pointsController';
import ItensController from './controllers/itensController';

const routes = express.Router();
const pointsController = new PointsController();
const itensController = new ItensController();

routes.get('/itens', itensController.index);

routes.post('/points', pointsController.create);
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);

//index, show, create, update, delete

export default routes;

//Service Pattern
//Repository Pattern (data Mapper)