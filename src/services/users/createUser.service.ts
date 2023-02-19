import {
  iUserRequest,
  iUserResult,
  iUserWithoutPassword,
} from "../../interfaces/user.interfaces";
import { client } from "../../database";
import format from "pg-format";
import {
  createUserSchema,
  returnUserSchemaWithoutPassword,
} from "../../schemas/user.schemas";

const createUserService = async (
  userData: iUserRequest
): Promise<iUserWithoutPassword | void> => {

  const queryString: string = format(
    `
          INSERT INTO 
              users(%I)
          VALUES(%L)
          RETURNING *;
          `,
    Object.keys(userData),
    Object.values(userData)
  );

  const queryResult: iUserResult = await client.query(queryString);

  const newUser = returnUserSchemaWithoutPassword.parse(queryResult.rows[0]);

  return newUser;
};

export { createUserService };
