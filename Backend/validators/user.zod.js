import {z} from 'zod';
export const createUserFromClerkSchema = z.object({
  clerkId: z.string(),
  name: z.string(),
  email: z.string().email(),
});

export const getUserProfileSchema = z.string()
  .regex(/^[0-9a-fA-F]{24}$/, "Invalid User ID format (expected MongoDB ObjectId)")
  .nonempty("User Id is required");