import { Request, Response } from 'express';

import logger from '../../logger';
import api from '../services/airQualityApi';

export default class CitySearchController {
  async searchCity(request: Request, response: Response) {
    logger.info('Iniciando Busca por Cidade');

    const { token } = request.headers;
    const { city } = request.body;

    try {
      const { data } = await api.get(`/feed/${city}/`, {
        params: {
          token,
        },
      });

      logger.info(
        'Response - CitySearchController.searchCity' + JSON.stringify(data),
      );

      return response.status(200).send({ data });
    } catch (error) {
      logger.error('' + JSON.stringify(error));

      return response.status(500).json({
        Error: 'Error ao executar serviço',
        StatusCode: response.statusCode,
      });
    }
  }
}
