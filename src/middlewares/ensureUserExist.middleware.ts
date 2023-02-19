import { Request, Response, NextFunction } from "express";
import { QueryConfig } from "pg";
import { client } from "../database";
import { iUserRequest, iUserResult } from "../interfaces/user.interfaces";
import { appError } from "../error";

const ensureUserExist = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<Response | void> => {
  const id: number = Number(request.params.id);

  const queryString: string = `
    SELECT 
        *
    FROM
        users
    WHERE
        id = $1
    `;

  const queryConfig: QueryConfig = {
    text: queryString,
    values: [id],
  };

  const queryResult: iUserResult = await client.query(queryConfig);

  if (queryResult.rowCount === 0) {
    throw new appError("User not exists");
  }

  return next();
};

const ensureEmailExist = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const userData: iUserRequest = request.body;
  const queryStringUserEmail: string = `
  SELECT 
    *
  FROM
    users
  WHERE
    "email" = $1
`;

  const queryConfigEmailExist: QueryConfig = {
    text: queryStringUserEmail,
    values: [userData.email],
  };

  const queryResultEmailExist: iUserResult = await client.query(
    queryConfigEmailExist
  );

  if (queryResultEmailExist.rowCount > 0) {
    throw new appError("Email already exist!", 409);
  }

  return next();
};

export { ensureUserExist, ensureEmailExist };
