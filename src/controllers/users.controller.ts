import { Request, Response } from "express";
import { iUser, iUserRequest } from "../interfaces/user.interfaces";
import { createUserService } from "../services/users/createUser.service";
import { getUserService } from "../services/users/retrieveUser.service";
import { deleteUserService } from "../services/users/deleteUser.service";
import { getUserProfileService } from "../services/users/retireveUserProfile.service"
import {activeUserService} from "../services/users/activeUser.service"

const createUsersController = async (
  request: Request,
  response: Response
): Promise<Response | void> => {
  const userData: iUserRequest = request.body;

  const newUser = await createUserService(userData);

  return response.status(201).json(newUser);
};

const retrieveUsersController = async (
  request: Request,
  response: Response
): Promise<Response> => {

  const getUser = await getUserService();

  return response.status(200).json(getUser);
};

const retrieveUsersProfileController = async (
  {validatedUser}: Request,
  response: Response
): Promise<Response> => {
  const userId: number = validatedUser.id

  const getUser = await getUserProfileService(userId);

  return response.status(200).json(getUser);
};

const deleteUserController =async (request:Request, response: Response): Promise<Response> => {
  const userId: number = parseInt(request.params.id)

  await deleteUserService(userId)

  return response.status(204).send()
  
}

const activeUserController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const userId: number = parseInt(request.params.id)

  const getUser = await activeUserService(userId);

  return response.status(200).json(getUser);
};

export { createUsersController, retrieveUsersController, deleteUserController, retrieveUsersProfileController, activeUserController};
