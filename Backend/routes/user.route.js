import { Router } from 'express';   
import { createUserFromClerk, getUserProfile } from '../controllers/user.controller.js';
import checkUser from '../middlewares/auth.middlewares.js';
// import { setUser } from '../middlewares/user.middlewares.js';

const router = Router();

// Webhook endpoint for Clerk user creation/updates
router.post('/clerk-webhook', createUserFromClerk);

// Get user profile (requires authentication)
router.get('/profile/:id', checkUser, getUserProfile);

// Set user in the requests
// router.get('/profile/:id', setUser);



export default router;
