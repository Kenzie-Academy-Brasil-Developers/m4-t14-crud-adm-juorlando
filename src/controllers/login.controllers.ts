import { Request, Response } from "express";
import { createLoginService } from "../services/login/login.service";
import "dotenv/config";

const createLoginController = async (
  request: Request,
  response: Response
): Promise<Response | void> => {
  const token = await createLoginService(request.body);

  return response.json(token);
};

export { createLoginController };
