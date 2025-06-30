import { clerkAuth } from './auth.middlewares.js';
import { User } from '../models/user.model.js';

export async function checkUser(req, res, next) {
  return clerkAuth(req, res, next);
}


// export async function setUser(req, res) {
//   const userId = req.params.id;

//   if (!userId) {
//     return res.status(401).json({ message: 'User Id is required' });
//   }

//   try {
//     const user = await User.findById(userId);

//       if (!user) {
//           return res.status(404).json({ message: 'User not found' });
//       }

//       req.user = user;
//       return res.status(200).json({ user });
//   } catch (error) {
//       console.error('Error fetching user profile:', error);
//       return res.status(500).json({ message: 'Internal server error' });
//   }
// }