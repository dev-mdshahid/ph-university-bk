import { z } from 'zod';

export const SUserValidation = z.object({
  password: z
    .string()
    .min(5, { message: 'Password has to be at least 5 characters long' })
    .optional(),
});
