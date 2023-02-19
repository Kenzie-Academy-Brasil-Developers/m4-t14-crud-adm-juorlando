import { Request, Response } from "express";
import { createLoginService } from "../services/login/login.service";

const createLoginController = async (
  request: Request,
  response: Response
): Promise<Response | void> => {

    const token = await createLoginService(request.body)

    return response.json(token)
};

export { createLoginController };
