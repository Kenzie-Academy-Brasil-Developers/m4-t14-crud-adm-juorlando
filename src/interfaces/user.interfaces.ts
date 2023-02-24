import { QueryResult } from "pg";
import { z } from "zod";
import {
  createUserSchema,
  returnUserSchema,
  allUserSchema,
  updateUserSchema, 
  userCreateSchema
} from "../schemas/user.schemas";

type iUserRequest = z.infer<typeof createUserSchema>;

type iUserRequestCreate = z.infer<typeof userCreateSchema>;

type iUser = z.infer<typeof returnUserSchema>;

type iUpdateRequest = z.infer<typeof updateUserSchema>

type iAllUserReturn = z.infer<typeof allUserSchema>;

type iUserWithoutPassword = Omit<iUser, "password">;
type iUserResult = QueryResult<iUserWithoutPassword>;
type iUserResultComplete = QueryResult<iUser>;

export {
  iUserRequest,
  iUser,
  iUserWithoutPassword,
  iUserResult,
  iAllUserReturn,
  iUserResultComplete,
  iUpdateRequest,
  iUserRequestCreate
};
