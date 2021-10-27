import { Request, Response } from 'express';

import logger from '../../logger';
import api from '../services/api';

export default class CitySearchController {
  async search(request: Request, response: Response) {
    logger.info('Iniciando Busca por Cidade');

    const { token } = request.headers;
    const { city } = request.body;

    try {
      const { data } = await api.get(`/feed/${city}/`, {
        params: {
          token,
        },
      });

      logger.info('Response API - AQI' + data);

      return response.status(200).send({ data });
    } catch (error) {
      logger.error('Retorno: ' + error);

      return response.status(401).json({
        error: 'Erro ao acessar serviço externo',
      });
    }
  }
}
