import { NextFunction, Request, Response } from "express";
import { appError } from "../error";
import jwt from "jsonwebtoken";
import "dotenv/config";

const ensureValidToken = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  let token = request.headers.authorization;

  if (!token) {
    throw new appError("Missing token", 403);
  }

  token = token.split(" ")[1];

  jwt.verify(token, process.env.SECRET_Key!, (error, decoded: any) => {
    if (error) {
      throw new appError(error.message, 401);
    }

    request.validatedUser = {
      id: parseInt(decoded.sub),
      admin: decoded.admin,
    };
  });

  return next();
};

export { ensureValidToken };
