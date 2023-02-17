import { Request, Response } from "express";
import { iUserRequest } from "../interfaces/user.interfaces";
import { createUserService } from "../services/users/createUser.service";

const createUsersController = async (request: Request, response: Response): Promise<Response> => {

  const userData: iUserRequest = request.body;

  const newUser = await createUserService(userData);

  return response.status(201).json(newUser)
  
};

export { createUsersController };
