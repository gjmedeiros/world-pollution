import { Request, Response } from 'express';

import logger from '../../logger';
import api from '../services/airQualityApi';

export default class CitySearchController {
  async searchCity(request: Request, response: Response) {
    logger.info('Iniciando Busca por Cidade');

    const { token } = request.headers;
    const { city } = request.query;

    const cityString = city as string;
    const citySemAcento = cityString
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');

    try {
      const { data } = await api.get(`/feed/${citySemAcento}/`, {
        params: {
          token,
        },
      });

      const infoPollution = data.data.aqi;

      logger.info(
        'Response - CitySearchController.searchCity - \n' +
          JSON.stringify(infoPollution),
      );

      return response.status(200).json(infoPollution);
    } catch (error) {
      logger.error('' + JSON.stringify(error));

      return response.status(500).json({
        Error: 'Error ao executar serviço - \n',
        StatusCode: response.statusCode,
      });
    }
  }
}
