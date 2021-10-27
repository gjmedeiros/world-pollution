import express from 'express';

import CitySearchController from './api/controllers/CitySearchController';

const routes = express.Router();

const citySearchController = new CitySearchController();

routes.get('/', (request, response) => {
  return response.json({ message: 'Aplicação Rodando' });
});

routes.get('/search', citySearchController.search);

export default routes;
