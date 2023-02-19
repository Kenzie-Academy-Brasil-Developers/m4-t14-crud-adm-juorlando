import { z } from "zod";

const createLoginSchema = z.object({
  email: z.string(),
  password: z.string(),
});

export { createLoginSchema };
