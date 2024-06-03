import { HttpResponseModel } from "../models/http-response-model"
import { PlayerModel } from "../models/player-model"
import { StatisticsModel } from "../models/statistics-model"
import * as Repository from "../repositories/players-repository"
import * as HttpResponse from "../utils/http-helpers"

export const getPlayerService = async (): Promise<HttpResponseModel> => {
  const data = await Repository.findAllPlayers()

  if (!data) return await HttpResponse.noContent()

  return await HttpResponse.OK(data)
}

export const getPlayerByIdService = async (id: number): Promise<HttpResponseModel> => {
  const player = await Repository.findPlayerById(id)

  if (!player) return await HttpResponse.noContent()

  return await HttpResponse.OK(player)
}

export const createPlayerService = async (player: PlayerModel) => {
  if (Object.keys(player).length === 0) return HttpResponse.badRequest({ name: "Invalid data", message: "Player details are mandatory" })

  await Repository.insertPlayer(player)

  return HttpResponse.created()
}

export const deletePlayerService = async (id: number) => {
  const player = await Repository.findPlayerById(id)

  if (!player) return await HttpResponse.badRequest({ name: "Check id", message: "Player Not Found!" })

  await Repository.deleteOnePlayer(id)

  return HttpResponse.OK({ message: "Player deleted Successfully" })
}
export const updatePlayerService = async (id: number, statistics: StatisticsModel) => {
  const player = await Repository.findPlayerById(id)

  if (!player) return await HttpResponse.badRequest({ name: "Check id", message: "Player Not Found!" })

  const response = await Repository.findAndModifyPlayer(id, statistics)

  return HttpResponse.OK(response)
}

