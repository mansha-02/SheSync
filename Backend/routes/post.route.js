import express from 'express';
import { getPosts, createPost, likePost } from '../controllers/post.controller.js';
// import {clerkAuth} from "../middlewares/clerkMiddleware.js";
import checkAuth from '../middlewares/auth.middlewares.js';

const router = express.Router();

router.get("/post-health", (req, res) => {
    res.send("Post service is running");
})

router.post('/createPost',checkAuth, createPost);
router.get('/getPost', checkAuth, getPosts);
router.get('/like/:id', checkAuth, likePost);

export default router;
