import express from 'express';

import CitySearchController from './controllers/CitySearchController';

const routes = express.Router();

const citySearchController = new CitySearchController();

routes.get('/', (request, response) => {
  return response.json({ message: 'Hello World' });
});

routes.get('/search', citySearchController.search);

export default routes;
