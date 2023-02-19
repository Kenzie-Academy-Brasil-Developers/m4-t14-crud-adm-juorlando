import { QueryConfig, QueryResult } from "pg";
import { client } from "../../database";

const deleteUserService = async (userId: number): Promise<void> => {

    const queryString: string = `
    UPDATE
        users
    SET 
        "active" = false
    WHERE
        id = $1
    `

    const queryConfig2: QueryConfig = {
        text: queryString,
        values: [userId]
    }

    await client.query(queryConfig2)
};

export { deleteUserService };
