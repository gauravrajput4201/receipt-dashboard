import { errorMessages } from "@/constants/messages";
import { z } from "zod";

const LoginSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: errorMessages.EMAIL_REQUIRED,
    })
    .email(errorMessages.EMAIL_INVALID),
  password: z.string().min(1, {
    message: errorMessages.PASSWORD_REQUIRED,
  }),
});
export default LoginSchema;
