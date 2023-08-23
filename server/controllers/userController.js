import mongoClient from '../db/mongoClient.js';

const usersCollection = mongoClient.db('scouts-pole').collection('users');

export const getUsers = async (req, res) => {
  try {
    const { email } = req.params;

    const foundUser = await usersCollection.findOne({ email });

    if (foundUser) {
      return res.status(200).json(foundUser);
    }

    res.status(404).json({ message: 'User not found' });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error fetching users', error: error.message });
  }
};

export const createUser = async (req, res) => {
  try {
    const { email, name } = req.body;

    if (!email || !name) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const existingUser = await usersCollection.findOne({ email });

    if (existingUser) {
      return res.status(409).json({ message: 'User already exists' });
    }

    const newUser = await usersCollection.insertOne({ email, name });
    res.status(201).json({ message: 'User created successfully', newUser });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error creating user', error: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { email } = req.params;
    const updatedUser = req.body;

    if (!updatedUser.email || !updatedUser.name) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const updateResult = await usersCollection.updateOne(
      { email },
      { $set: updatedUser },
      { upsert: true }
    );

    if (updateResult.modifiedCount > 0) {
      return res
        .status(200)
        .json({ message: 'User updated successfully', updateResult });
    }

    res.status(404).json({ message: 'User not found' });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error updating user', error: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { email } = req.params;

    const result = await usersCollection.deleteOne({ email });

    if (result.deletedCount > 0) {
      return res.status(204).end();
    }

    res.status(404).json({ message: 'User not found' });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error deleting user', error: error.message });
  }
};