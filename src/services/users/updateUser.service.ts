import { QueryConfig, QueryResult } from "pg";
import format from "pg-format";
import { client } from "../../database";
import {
  iUserRequest,
  iUserResult,
  iUserWithoutPassword,
} from "../../interfaces/user.interfaces";
import { returnUserSchemaWithoutPassword } from "../../schemas/user.schemas";

const updateUserService = async (
  userData: iUserRequest,
  userId: number
): Promise<iUserWithoutPassword | void> => {
  const queryString: string = format(
    `
        UPDATE
            users
        SET 
            (%I) = ROW(%L)
        WHERE
            id = $1
        RETURNING
        *
        `,
    Object.keys(userData),
    Object.values(userData)
  );

  const queryConfig: QueryConfig = {
    text: queryString,
    values: [userId],
  };

  const queryResult: iUserResult = await client.query(queryConfig);

  const newUser = returnUserSchemaWithoutPassword.parse(queryResult.rows[0]);

  return newUser;
};

export { updateUserService };
