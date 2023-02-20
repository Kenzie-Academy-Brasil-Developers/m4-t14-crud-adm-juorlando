import { hashSync } from "bcryptjs";
import { boolean, z } from "zod";

const createUserSchema = z.object({
  name: z.string().min(3).max(45),
  email: z.string().email(),
  password: z.string().transform((pass) => {
    return hashSync(pass, 10);
  }),
});

const returnUserSchema = createUserSchema.extend({
  id: z.number(),
  active: z.boolean(),
  admin: z.boolean(),
});

const activeUserSchema = z.object({
  active: z.boolean(),
});

const returnUserSchemaWithoutPassword = returnUserSchema.omit({
  password: true,
});

const allUserSchema = z.array(returnUserSchemaWithoutPassword);

export {
  createUserSchema,
  returnUserSchema,
  returnUserSchemaWithoutPassword,
  allUserSchema,
  activeUserSchema,
};
