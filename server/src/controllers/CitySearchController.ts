import { Request, Response } from 'express';

import api from '../services/api';

export default class CitySearchController {
  async search(request: Request, response: Response) {
    console.log('Chegou na aplicação');

    const { token } = request.headers;
    const { city } = request.body;

    try {
      const { data } = await api.get(`/feed/${city}/`, {
        params: {
          token,
        },
      });

      return response.status(200).send({ data });
    } catch (error) {
      return response.status(401).json({
        error: 'Erro ao acessar serviço externo',
      });
    }
  }
}
