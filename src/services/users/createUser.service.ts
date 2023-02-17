import {
  iUserRequest,
  iUserResult,
  iUserWithoutPassword,
} from "../../interfaces/user.interfaces";
import { client } from "../../database";
import format from "pg-format";

const createUserService = async (
  userData: iUserRequest
): Promise<iUserWithoutPassword> => {
  const queryString: string = format(
    `
        INSERT INTO 
            users(%I)
        VALUES(%L)
        RETURNING id, name, email, admin, active;
        `,
    Object.keys(userData),
    Object.values(userData)
  );

  const queryResult: iUserResult = await client.query(queryString);

  return queryResult.rows[0];
};

export { createUserService };
