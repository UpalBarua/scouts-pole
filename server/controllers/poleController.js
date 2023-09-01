import { ObjectId } from 'mongodb';
import mongoClient from '../db/mongoClient.js';

const polesCollection = mongoClient.db('scouts-pole').collection('poles');

// Get all poles
export const getPoles = async (req, res) => {
  try {
    const poles = await polesCollection.find({}).toArray();
    res.status(200).json(poles);
  } catch (error) {
    next(error);
  }
};

// Get a pole by its ID
export const getPoleById = async (req, res) => {
  try {
    const { poleId } = req.params;
    const query = { _id: new ObjectId(poleId) };

    const pole = await polesCollection.findOne(query);

    if (pole) {
      return res.status(200).json(pole);
    } else {
      return res.status(404).json({ message: 'Pole not found' });
    }
  } catch (error) {
    next(error);
  }
};

// Create a new pole
export const createPole = async (req, res) => {
  try {
    const { body } = req;

    if (!body) {
      return res.status(400).json({ message: 'Invalid body' });
    }

    const newPole = {
      ...body,
      options: body.options.map((option) => {
        return {
          ...option,
          _id: new ObjectId(),
          votes: [],
        };
      }),
    };

    const createdPole = await polesCollection.insertOne(newPole);

    if (createPole) {
      return res
        .status(201)
        .json({ message: 'Pole created successfully', createdPole });
    }

    res.status(400).json({ message: 'Failed to create pole' });
  } catch (error) {
    next(error);
  }
};

// Update a pole by its ID
export const updatePole = async (req, res) => {
  try {
    const { poleId } = req.params;
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
    next(error);
  }
};

// Delete a pole by its ID
export const deletePole = async (req, res) => {
  try {
    const { poleId } = req.params;

    const result = await polesCollection.deleteOne({
      _id: new ObjectId(poleId),
    });

    if (result.deletedCount > 0) {
      return res.status(200).json({ message: 'Pole deleted successfully' });
    }

    res.status(404).json({ message: 'Pole not found' });
  } catch (error) {
    next(error);
  }
};

export const updatePoleVotes = async (req, res) => {
  try {
    const { poleId } = req.params;
    const { userId, optionId } = req.body;

    const pole = await polesCollection.findOne({ _id: new ObjectId(poleId) });

    const filteredOptions = pole.options.map((option) => {
      return {
        ...option,
        votes: option.votes.filter((vote) => vote !== userId),
      };
    });

    const updatedOptions = filteredOptions.map((option) => {
      if (option._id.toString() === optionId) {
        option.votes.push(userId);
      }

      return option;
    });

    // ! could be removed
    const updatedPole = {
      ...pole,
      options: updatedOptions,
    };

    const result = await polesCollection.updateOne(
      { _id: new ObjectId(poleId) },
      { $set: updatedPole }
    );

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
