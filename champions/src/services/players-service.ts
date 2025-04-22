import { StatisticsModel } from '../models/statistics-model';
import * as PlayerRepository from '../repositories/players-repository';
import * as HttpResponse from '../utils/http-helper'

export const getPlayerService = async () => {
  const data = await PlayerRepository.findAllPlayers();
  let response = null;
  if(data) {
    response = await HttpResponse.ok(data)
  } else {
    response = await HttpResponse.noContent() 
  } 
  return response 
}

export const getPlayerByIdService = async (id: number) => {
  const data = await PlayerRepository.findPlayerById(id);
  let response = null;
  if(data) {
    response = await HttpResponse.ok(data)
  } else {
    response = await HttpResponse.noContent() 
  } 
  return response 
}

export const createPlayerService = async (player: any) => {
  if (Object.keys(player).length != 0) {
    const data = await PlayerRepository.createPlayer(player);
    return await HttpResponse.created()
  } 
  return await HttpResponse.badRequest()
}

export const updatePlayerService = async (id: number, statistics: StatisticsModel) => {
  if (Object.keys(statistics).length != 0) {
    const data = await PlayerRepository.updatePlayer(id, statistics);
    return await HttpResponse.ok(data)
  } 
  return await HttpResponse.badRequest()

}

export const deletePlayerService = async (id: number) => {
  const response = await PlayerRepository.deletePlayer(id);
  if (!response) {
    return await HttpResponse.noContent()
  }
  return await HttpResponse.ok({message: "deleted"})
}
