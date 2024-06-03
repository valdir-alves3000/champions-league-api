import { HttpResponseModel } from "../models/http-response-model"
import { PlayerModel } from "../models/player-model"
import { findAllPlayers, findPlayerById, insertPlayer } from "../repositories/players-repository"
import * as HttpResponse from "../utils/http-helpers"

export const getPlayerService = async (): Promise<HttpResponseModel> => {
  const data = await findAllPlayers()

  if (!data) return await HttpResponse.noContent()

  return await HttpResponse.OK(data)
}

export const getPlayerByIdService = async (id: number): Promise<HttpResponseModel> => {
  const player = await findPlayerById(id)

  if (!player) return await HttpResponse.noContent()

  return await HttpResponse.OK(player)
}

export const createPlayerService = async (player: PlayerModel) => {
  if (Object.keys(player).length === 0) return HttpResponse.badRequest()

  await insertPlayer(player)

  return HttpResponse.created()
}
