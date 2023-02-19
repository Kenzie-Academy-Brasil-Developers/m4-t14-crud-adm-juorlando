import { QueryConfig, QueryResult } from "pg";
import { client } from "../../database";
import { iUserRequest, iUserResult, iUserWithoutPassword } from "../../interfaces/user.interfaces";

const activeUserService = async (userId: number): Promise<iUserWithoutPassword | void> => {

    const queryString: string = `
    UPDATE
        users
    SET 
        "active" = true
    WHERE
        id = $1
    `

    const queryConfig: QueryConfig = {
        text: queryString,
        values: [userId]
    }

    const queryResult: iUserResult = await client.query(queryConfig)

    return queryResult.rows[0]
};

export { activeUserService };