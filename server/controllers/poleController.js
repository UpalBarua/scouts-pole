import { ObjectId } from 'mongodb';
import mongoClient from '../db/mongoClient.js';

const polesCollection = mongoClient.db('scouts-pole').collection('poles');

// Get all poles
export const getPoles = async (req, res) => {
  try {
    const poles = await polesCollection.find({}).toArray();
    res.status(200).json(poles);
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error fetching poles', error: error.message });
  }
};

// Get a pole by its ID
export const getPoleById = async (req, res) => {
  try {
    const poleId = req.params.poleId;
    const query = { _id: new ObjectId(poleId) };

    const pole = await polesCollection.findOne(query);

    if (pole) {
      return res.status(200).json(pole);
    } else {
      return res.status(404).json({ message: 'Pole not found' });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error fetching pole', error: error.message });
  }
};

// Create a new pole
export const createPole = async (req, res) => {
  try {
    const { body } = req;

    if (!body) {
      return res.status(400).json({ message: 'Invalid body' });
    }

    const createdPole = await polesCollection.insertOne(body);

    if (createPole) {
      return res
        .status(201)
        .json({ message: 'Pole created successfully', createdPole });
    }

    res.status(400).json({ message: 'Failed to create pole' });
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error creating pole', error: error.message });
  }
};

// Update a pole by its ID
export const updatePole = async (req, res) => {
  try {
    const poleId = req.params.poleId;
    const updatedPole = req.body;

    const query = { _id: new ObjectId(poleId) };
    const update = { $set: updatedPole };

    const result = await polesCollection.updateOne(query, update);

    if (result.modifiedCount > 0) {
      return res.status(200).json({ message: 'Pole updated successfully' });
    } else {
      return res.status(404).json({ message: 'Pole not found' });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error updating pole', error: error.message });
  }
};

// Delete a pole by its ID
export const deletePole = async (req, res) => {
  try {
    const poleId = req.params.poleId;
    const query = { _id: new ObjectId(poleId) };

    const result = await polesCollection.deleteOne(query);

    if (result.deletedCount > 0) {
      return res.status(200).json({ message: 'Pole deleted successfully' });
    } else {
      return res.status(404).json({ message: 'Pole not found' });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: 'Error deleting pole', error: error.message });
  }
};
