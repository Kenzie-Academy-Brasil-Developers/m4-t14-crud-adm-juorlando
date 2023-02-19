import { iAllUserReturn } from "../../interfaces/user.interfaces";
import { client } from "../../database";
import { allUserSchema } from "../../schemas/user.schemas";

const getUserService = async (): Promise<iAllUserReturn> => {
  const queryString: string = `
    SELECT
      *
    FROM 
      users
    `;

  const queryResult: any = await client.query(queryString);

  const allUsers = allUserSchema.parse(queryResult.rows)

  return allUsers;
};

export { getUserService };
