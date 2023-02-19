import { Request, Response, NextFunction } from "express";
import { appError } from "../error";

const ensureIsAdmin = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const userAuth = request.validatedUser;

  if (userAuth.admin.toString() !== "true") {
    throw new appError("Insufficient Permission", 403);
  }

  return next();
};

export { ensureIsAdmin };
