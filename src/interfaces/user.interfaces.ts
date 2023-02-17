import { QueryResult } from "pg";

interface iUserRequest {
  name: string;
  email: string;
  password: string;
  admin: boolean;
  active: boolean;
}

interface iUser extends iUserRequest {
  id: number;
}

type iUserWithoutPassword = Omit<iUser, "password">;
type iUserResult = QueryResult<iUserWithoutPassword>;

export { iUserRequest, iUser, iUserWithoutPassword, iUserResult };
