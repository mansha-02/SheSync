import z from 'zod';

export const createUserFromClerkSchema = z.object({
  clerkId: z.string(),
  name: z.string(),
  email: z.string().email(),
});

export const getUserProfileSchema = z.object({
  _id: z.string(),
  name: z.string(),
  email: z.string().email(),
});
