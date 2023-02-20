import { Router } from "express";
import {
  activeUserController,
  createUsersController,
  deleteUserController,
  retrieveUsersController,
  retrieveUsersProfileController,
  updateUserController,
} from "../controllers/users.controller";
import { createUserSchema } from "../schemas/user.schemas";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import {
  ensureEmailExist,
  ensureUserExist,
} from "../middlewares/ensureUserExist.middleware";
import { ensureValidToken } from "../middlewares/ensureToken.middleware";
import { ensureIsAdmin } from "../middlewares/ensureIsAdmin.middleware";
import { ensureRightUser } from "../middlewares/ensureIsTheRightUser.middleware";

const userRoutes: Router = Router();

userRoutes.post(
  "",
  ensureDataIsValidMiddleware(createUserSchema),
  ensureEmailExist,
  createUsersController
);

userRoutes.get("", ensureValidToken, ensureIsAdmin, retrieveUsersController);

userRoutes.get("/profile", ensureValidToken, retrieveUsersProfileController);

userRoutes.patch(
  "/:id",
  ensureValidToken,
  ensureUserExist,
  ensureRightUser,
  ensureEmailExist,
  updateUserController
);

userRoutes.put(
  "/:id/recover",
  ensureValidToken,
  ensureIsAdmin,
  ensureUserExist,
  activeUserController
);

userRoutes.delete(
  "/:id",
  ensureValidToken,
  ensureUserExist,
  ensureRightUser,
  deleteUserController
);

export { userRoutes };
