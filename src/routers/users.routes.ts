import { Router } from "express";
import {
  createUsersController,
  deleteUserController,
  retrieveUsersController,
} from "../controllers/users.controller";
import { createUserSchema } from "../schemas/user.schemas";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import { ensureEmailExist, ensureUserExist,} from "../middlewares/ensureUserExist.middleware";
import { ensureValidToken } from "../middlewares/ensureToken.middleware";

const userRoutes: Router = Router();

userRoutes.post("", ensureDataIsValidMiddleware(createUserSchema), ensureEmailExist, createUsersController);
userRoutes.get("", ensureValidToken, retrieveUsersController);
userRoutes.delete("/:id", ensureUserExist, deleteUserController);

export { userRoutes };
