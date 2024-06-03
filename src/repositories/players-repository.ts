import fs from 'node:fs/promises'
import { PlayerModel } from "../models/player-model"
import { StatisticsModel } from "../models/statistics-model"

const getDataBase = async (): Promise<PlayerModel[]> => {
  const data = await fs.readFile("./src/data/players.json", "utf-8")
  const players = JSON.parse(data)
  return players
}

const updatePlayers = async (players: PlayerModel[]) => {
  await fs.writeFile("./src/data/players.json", JSON.stringify(players), "utf-8")
}

const createID = async () => (await getDataBase()).length + 1

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
  const players = await getDataBase()
  return players
}

export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
  const players = await getDataBase()
  return players.find(player => player.id === id)
}

export const insertPlayer = async (player: PlayerModel) => {
  player.id = await createID()
  const players = await getDataBase()
  players.push(player)

  await updatePlayers(players)
}

export const deleteOnePlayer = async (id: number) => {
  const players = await getDataBase()
  const index = players.findIndex(player => player.id === id)
  index !== -1 && players.splice(index, 1)

  updatePlayers(players)
}

export const findAndModifyPlayer = async (id: number, statistics: StatisticsModel): Promise<PlayerModel> => {
  const players = await getDataBase()
  const playerIndex = players.findIndex(player => player.id === id)

  if (playerIndex !== -1) {
    players[playerIndex].statistics = statistics
  }

  updatePlayers(players)

  return players[playerIndex]
}
