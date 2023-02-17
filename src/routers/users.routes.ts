import { Router } from "express";
import { createUsersController } from "../controllers/users.controller";

const userRoutes: Router = Router();

userRoutes.post("", createUsersController);

export { userRoutes };
