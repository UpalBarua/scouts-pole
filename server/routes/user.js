import { Router } from 'express';
import mongoClient from '../db/mongoClient';

const router = new Router();
const usersCollection = mongoClient.db('scouts-pole').collection('users');

// TODO - Move the functionality to a controller functions
// TODO - GET route needs to query only one user by email/_id and return it
router.get('/users', async (req, res) => {
  try {
    const result = await usersCollection.find({}).toArray();

    // * Ensure the validity of the result by checking for non-empty content
    if (result) {
      return res.status(200).json(result);
    }

    // * Always send proper status codes
    res.status(404).json({ message: 'No users found' });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error fetching users', error: error.message });
  }
});

// TODO - Validate the body, make sure it contains all the necessary fields.
router.post('/users', async (req, res) => {
  try {
    const user = req.body;
    const query = { email: user.email };

    const existingUser = await usersCollection.findOne(query);

    if (existingUser) {
      return res.json({ message: 'User Already Exists' });
    }

    const result = await usersCollection.insertOne(user);
    res.status(201).json({ message: 'User created successfully', result });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error creating user', error: error.message });
  }
});

export default router;
