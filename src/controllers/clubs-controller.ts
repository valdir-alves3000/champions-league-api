import { Request, Response } from 'express'
import * as service from '../services/clubs-service'

export const getClub = async (req: Request, res: Response) => {
  const httpResponse = await service.getClubsService()
  res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const getClubByName = async (req: Request, res: Response) => {
  const name = req.params.name
  const httpResponse = await service.getClubByNameService(name)
  res.status(httpResponse.statusCode).json(httpResponse.body)
}
