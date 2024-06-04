import fs from 'node:fs/promises'
import { ClubModel } from '../models/clubs-model'
import { PlayerModel } from "../models/player-model"

const getDataBase = async (): Promise<PlayerModel[]> => {
  const data = await fs.readFile("./src/data/clubs.json", "utf-8")
  const clubs = JSON.parse(data)
  return clubs
}

export const findAllClubs = async (): Promise<ClubModel[]> => {
  const clubs: ClubModel[] = await getDataBase()
  return clubs
}

export const findClubByName = async (name: string) => {
  const clubs = await getDataBase()

  return clubs.find(club => (club.name).toUpperCase() === name.toUpperCase())
}
