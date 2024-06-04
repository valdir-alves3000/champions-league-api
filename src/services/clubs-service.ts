import { HttpResponseModel } from '../models/http-response-model'
import * as Repository from '../repositories/clubs-repositories'
import * as HttpResponse from "../utils/http-helpers"

export const getClubsService = async (): Promise<HttpResponseModel> => {
  const data = await Repository.findAllClubs()

  if (!data) return await HttpResponse.noContent()

  return await HttpResponse.OK(data)
}

export const getClubByNameService = async (name: string) => {
  const data = await Repository.findClubByName(name)
  if (!data) return await HttpResponse.noContent()

  return await HttpResponse.OK(data)
}
