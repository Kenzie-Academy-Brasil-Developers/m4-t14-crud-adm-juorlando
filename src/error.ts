import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";

class appError extends Error {
  message: string;
  statusCode: number;

  constructor(message: string, statusCode: number = 400) {
    super();
    this.message = message;
    this.statusCode = statusCode;
  }
}

const handleErrors = (
  error: Error,
  request: Request,
  response: Response,
  _: NextFunction
) => {
  if (error instanceof appError) {
    return response.status(error.statusCode).json({ message: error.message });
  }

  if(error instanceof ZodError){
    return response.status(400).json({
      message: error.flatten().fieldErrors
    })
  }

  console.log(error);
  return response.status(500).json({ message: "internal server error" });
};

export { appError, handleErrors };
