import { Post } from '../models/post.model.js';
import { createPostSchema } from '../validators/post.zod.js';
import { getAuth } from '@clerk/express';

export async function createPost(req, res) {
  try {
    const { title, category, content } = createPostSchema.parse(req.body);
    const clerkId = getAuth(req).userId;

    if (!clerkId) {
      return res.status(401).json({ message: 'Authentication required' });
    }

    if (!title || !category || !content) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const newPost = await Post.create({
          title,
          category,
          content, 
          author: clerkId,
        });

        console.log('sent the post', newPost);
        return res.status(200).json({ message: 'Post created successfully', newPost });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: 'Failed to create post' });
    }

  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Failed to create post' });
  }
}

export async function getPosts(req, res) {
  try {
    const posts = await Post.find();
    if (posts.length === 0) {
      return res.status(404).json({ message: 'No posts found' });
    }
    res.status(200).json(posts);
  } catch (error) {
    console.log(error);
  }
}

export async function likePost(req, res) {
  try {
    const { id } = req.params;
    const clerkId = getAuth(req).userId;

    if (!clerkId) {
      return res.status(401).json({ message: 'Authentication required' });
    }

    const post = await Post.findById(id);

    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    if (post.likes.includes(clerkId)) {
      return res.status(400).json({ error: 'User already liked the post' });
    }

    post.likes.push(clerkId);
    await post.save();

    res.status(200).json({ message: 'Post liked successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
