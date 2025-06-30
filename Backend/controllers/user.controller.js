import { User } from '../models/user.model.js';
import { createUserFromClerkSchema, getUserProfileSchema } from '../validators/user.zod.js';
import { getAuth } from '@clerk/express';
import { clerkClient } from '@clerk/express';

export async function createUserFromClerk(req, res) {
  // const data = req.body;

  // const { clerkId, name, email } = createUserFromClerkSchema.parse(data);

  const clerk = await clerkClient.users.getUser(getAuth(req).userId);

  const name = clerk.firstName + ' ' + clerk.lastName;
  const email = clerk.emailAddresses[0].emailAddress;
  const clerkId = clerk.id;

  // if (!clerkId || !name || !email) {
  //   return res.status(400).json({ message: 'Invalid webhook data' });
  // }

  try {
    const existingUser = await User.findOneAndUpdate({clerkId}, {
      name,
      email,
    });
    if (existingUser) {
      return res.status(200).json({ message: 'User updated successfully' });
    }

    const newUser = await User.create({
      clerkId,
      name,
      email,
    })

    // const {token} = await clerkClient.signInTokens.createSignInToken({
    //   userId: clerkId,
    // });
    // console.log('Token:', token);

    return res.status(201).json({ message: 'User created successfully', newUser });

  } catch (error) {
    console.error('Error creating/updating user from Clerk webhook:', error);
    return res.status(500).json({ message: 'Server error' });
  }
}

export async function getUserProfile(req, res) {
  console.log('User profile requested for:', req.params.id);

  try {
    const id = req.params.id;
    const userId = getAuth(req).userId;

    if (!id) {
      return res.status(400).json({ message: 'Id is required' });
    }
    // if(!clerkId.userId){
    //   return res.status(401).json({ message: "Authentication required" });
    // }

    try {
      const currentUser = await User.findById(id).where({clerkId: userId});

      if (!currentUser) {
        return res.status(404).json({ message: 'User not found' });
      }

      return res.status(200).json({
        user: {
          id: currentUser.id,
          name: currentUser.name,
          email: currentUser.email,
        },
      });
    } catch (error) {
      console.error('Error fetching user profile:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  } catch (error) {
    console.error('Error fetching user profile:', error);
    return res.status(500).json({ message: 'Server error' });
  }
}


