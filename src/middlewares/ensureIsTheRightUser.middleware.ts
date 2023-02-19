import { Request, Response, NextFunction } from "express";
import { appError } from "../error";

const ensureRightUser = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const userAuth = request.validatedUser;
  const userId: number = parseInt(request.params.id)

  if (userAuth.id !== userId && userAuth.admin.toString() !== "true") {
    throw new appError("Insufficient Permission", 403);
  }

  return next();
};

export { ensureRightUser };