import { Router } from "express";
import {
  createUsersController,
  deleteUserController,
  retrieveUsersController,
  retrieveUsersProfileController
} from "../controllers/users.controller";
import { createUserSchema } from "../schemas/user.schemas";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import { ensureEmailExist, ensureUserExist,} from "../middlewares/ensureUserExist.middleware";
import { ensureValidToken } from "../middlewares/ensureToken.middleware";

const userRoutes: Router = Router();

userRoutes.post("", ensureDataIsValidMiddleware(createUserSchema), ensureEmailExist, createUsersController);
userRoutes.get("", retrieveUsersController);
userRoutes.get("/profile", ensureValidToken, retrieveUsersProfileController)
userRoutes.delete("/:id", ensureValidToken, ensureUserExist, deleteUserController);

export { userRoutes };
