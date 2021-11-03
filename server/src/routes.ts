import express from 'express';

import CitySearchController from './api/controllers/CitySearchController';
import SearchLocationController from './api/controllers/SearchlocationController';

const citySearchController = new CitySearchController();
const searchLocationController = new SearchLocationController();

const routes = express.Router();

routes.get('/', (request, response) => {
  return response.json({ message: 'Aplicação Rodando' });
});

routes.get('/searchCity', citySearchController.searchCity);

routes.get('/searchLocation', searchLocationController.searchLocation);

export default routes;
