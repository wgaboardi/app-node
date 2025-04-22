import {Request, Response} from 'express'
import * as service from '../services/players-service'
import { badRequest, noContent } from '../utils/http-helper';

export const getPlayer =  async (req: Request, res: Response)=> {
  const httpResponse = await service.getPlayerService();

  res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const getPlayerById = async (req: Request, res: Response) => {
  const playerId = parseInt(req.params.id);
  const httpResponse = await service.getPlayerByIdService(playerId);

  res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const postPlayer = async (req: Request, res: Response) => {
  const player = req.body;
  const httpResponse = await service.createPlayerService(player);
  if (httpResponse)  {
  res.status(httpResponse.statusCode).json(httpResponse.body)
  } else {
    const response  = await badRequest()
    res.status(response.statusCode).json(response.body)
  }
}

export const updatePlayer = async (req: Request, res: Response) => {
  const playerId = parseInt(req.params.id);
  const player = req.body;
  const httpResponse = await service.updatePlayerService(playerId, player);

  res.status(httpResponse.statusCode).json(httpResponse.body)
}
export const deletePlayer = async (req: Request, res: Response) => {
  const playerId = parseInt(req.params.id);
  const httpResponse = await service.deletePlayerService(playerId);

  res.status(httpResponse.statusCode).json(httpResponse.body)
}

