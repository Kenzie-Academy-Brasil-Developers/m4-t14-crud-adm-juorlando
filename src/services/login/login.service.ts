import { compare } from "bcryptjs";
import { QueryConfig } from "pg";
import { client } from "../../database";
import { appError } from "../../error";
import { iLoginRequest } from "../../interfaces/login.interface";
import jwt from "jsonwebtoken";
import { iUserResultComplete } from "../../interfaces/user.interfaces";

const createLoginService = async (
  loginData: iLoginRequest
): Promise<string | void> => {
  const queryString: string = `
    SELECT
        *
    FROM
        users
    WHERE
        email = $1
`;

  const queryConfig: QueryConfig = {
    text: queryString,
    values: [loginData.email],
  };

  const queryResult: iUserResultComplete = await client.query(queryConfig);

  if (queryResult.rowCount === 0) {
    throw new appError("Invalid e-mail or password", 401);
  }

  const comparePassword: boolean = await compare(
    loginData.password,
    queryResult.rows[0].password
  );

  if (!comparePassword) {
    throw new appError("Invalid e-mail or password", 401);
  }

  const token: string = jwt.sign(
    {
      active: queryResult.rows[0].active,
    },
    "dhi2ube324R42@h1!b23",
    {
      expiresIn: "24h",
      subject: queryResult.rows[0].id.toString(),
    }
  );

  return token;
};

export { createLoginService };
