// import { Request, Response, NextFunction } from "express";
// import { appError } from "../error";

// const ensureNotActive = async (
//   request: Request,
//   response: Response,
//   next: NextFunction
// ): Promise<void> => {
//   const userAuth = request.validatedUser;

//   if (userAuth.active.toString() !== "false") {
//     throw new appError("User already active", 400);
//   }

//   return next();
// };

// export { ensureNotActive };