// import { QueryConfig, QueryResult } from "pg";
// import { client } from "../../database";
// import { iUserRequest, iUserWithoutPassword } from "../../interfaces/user.interfaces";

// const activeUserService = async (userData: iUserRequest, userId: number): Promise<iUserWithoutPassword | void> => {

//     const queryString: string = `
//     UPDATE
//         users
//     SET 
//         "active" = true
//     WHERE
//         id = $1
//     `

//     const queryConfig: QueryConfig = {
//         text: queryString,
//         values: [userId]
//     }

//     await client.query(queryConfig)
// };

// export { activeUserService };