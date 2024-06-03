import { Request, Response } from "express";
import * as service from "../services/players-service";

export const getPlayer = async (req: Request, res: Response) => {
  const httpResponse = await service.getPlayerService()
  res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const getPlayerById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id)
  const httpResponse = await service.getPlayerByIdService(id)
  res.status(httpResponse.statusCode).json(httpResponse.body)
}

export const postPlayer = async (req: Request, res: Response) => {
  const player = req.body
  const httpResponse = await service.createPlayerService(player)

  res.status(httpResponse.statusCode).json(httpResponse.body)
}