import { z } from "zod";

export const SignupValidation = z.object({
  name: z
    .string()
    .min(2, { message: "Name must contain at least two characters" }),
  username: z.string().min(2),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password needs to be at least 8 characters" }),
});
