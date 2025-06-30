import z from 'zod';

export const postSchema = z.object({
  title: z.string(),
  category: z.string(),
  content: z.string(),
  author: z.string(),
  likes: z.array(z.string()),
});

export const createPostSchema = z.object({
  title: z.string(),
  category: z.string(),
  content: z.string(),
});

export const likePostSchema = z.object({
  clerkId: z.string(),
});
