import { HttpResponseModel } from "../models/http-response-model"

export const OK = async (data: any): Promise<HttpResponseModel> => {

  return {
    statusCode: 200,
    body: data
  }
}

export const created = async (): Promise<HttpResponseModel> => {

  return {
    statusCode: 201,
    body: { message: "PLayer Created Successfully" }
  }
}

export const noContent = async (): Promise<HttpResponseModel> => {

  return {
    statusCode: 204,
    body: null
  }
}

export const badRequest = async (err: Error): Promise<HttpResponseModel> => {

  return {
    statusCode: 400,
    body: err
  }
}

export const notFound = async (): Promise<HttpResponseModel> => {

  return {
    statusCode: 404,
    body: null
  }
}