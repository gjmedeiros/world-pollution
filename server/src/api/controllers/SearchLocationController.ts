import { Request, Response } from 'express';

import logger from '../../logger';
import api from '../services/geocodingApi';

export default class SearchLocationController {
  async searchLocation(request: Request, response: Response) {
    logger.info('Iniciando Busca por Localidade');

    const { token } = request.headers;
    const { latitude, longitude } = request.query;

    try {
      const { data } = await api.get('', {
        params: {
          latlng: latitude + ', ' + longitude,
          key: token,
        },
      });

      const local = data.results[0].address_components[4].long_name;

      logger.info(
        'Response - SearchLocationController.searchLocation - \n ' +
          JSON.stringify(local),
      );

      return response.status(200).json(local);
    } catch (error) {
      logger.error('' + JSON.stringify(error));

      return response.status(500).json({
        Error: 'Error ao executar serviço - \n',
        StatusCode: response.statusCode,
      });
    }
  }
}
