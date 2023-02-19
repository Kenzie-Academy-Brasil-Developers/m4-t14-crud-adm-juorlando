import { QueryResult } from "pg";
import { z } from "zod";
import {createUserSchema, returnUserSchema, returnUserSchemaWithoutPassword, allUserSchema} from "../schemas/user.schemas";


type iUserRequest = z.infer<typeof createUserSchema>

type iUser = z.infer<typeof returnUserSchema>

type iAllUserReturn = z.infer<typeof allUserSchema>

type iUserWithoutPassword = Omit<iUser, "password">;
type iUserResult = QueryResult<iUserWithoutPassword>;
type iUserResultComplete = QueryResult<iUser>

export { iUserRequest, iUser, iUserWithoutPassword, iUserResult, iAllUserReturn, iUserResultComplete };
