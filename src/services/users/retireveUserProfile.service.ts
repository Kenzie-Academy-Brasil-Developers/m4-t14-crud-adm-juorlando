import {
  iAllUserReturn,
} from "../../interfaces/user.interfaces";
import { client } from "../../database";
import { QueryConfig } from "pg";
import "dotenv/config";
import { Request, Response } from "express";

const getUserProfileService = async (userId: number): Promise<iAllUserReturn> => {

  const queryString: string = `
        SELECT
        "id", "name", "email", "admin", "active" 
        FROM
            users
        WHERE
         id = $1
  `;

  const queryConfig: QueryConfig = {
    text: queryString,
    values: [userId]
  }

  const queryResult = await client.query(queryConfig);

  return queryResult.rows[0];
};

export { getUserProfileService };
