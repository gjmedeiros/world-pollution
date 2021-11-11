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

      logger.info(
        'Response - SearchLocationController.searchLocation ' +
          JSON.stringify(data),
      );

      return response.status(200).send(data);
    } catch (error) {
      logger.error('' + JSON.stringify(error));

      return response.status(500).json({
        Error: 'Error ao executar serviço',
        StatusCode: response.statusCode,
      });
    }
  }
}
