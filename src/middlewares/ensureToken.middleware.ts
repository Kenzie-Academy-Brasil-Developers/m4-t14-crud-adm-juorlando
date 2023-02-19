import { NextFunction, Request, Response } from "express";
import { appError } from "../error";
import jwt from "jsonwebtoken";

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

  jwt.verify(token, "dhi2ube324R42@h1!b23", (error, decoded: any) => {

    if(error){
        throw new appError(error.message, 401)
    }

    console.log(decoded)

    return next()
  });

  return next();
};

export { ensureValidToken };
