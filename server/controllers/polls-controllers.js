import { ObjectId } from 'mongodb';
import mongoClient from '../db/mongoClient.js';

const pollsCollection = mongoClient.db('scouts-poll').collection('polls');

// Get all polls
export const getPolls = async (req, res, next) => {
  try {
    const polls = await pollsCollection.find({}).toArray();
    res.status(200).json(polls);
  
  } catch (error) {
    next(error);
  }
};

// Get a poll by its ID
export const getPollById = async (req, res, next) => {
  try {
    const { pollId } = req.params;

    const foundPoll = await pollsCollection.findOne({
      _id: new ObjectId(pollId),
    });

    if (foundPoll) {
      return res.status(200).json(foundPoll);
    }

    res.status(404).json({ message: 'Poll not found' });
  } catch (error) {
    next(error);
  }
};

// Create a new poll
export const createPoll = async (req, res, next) => {
  try {
    const { body } = req;

    if (!body) {
      return res.status(400).json({ message: 'Invalid body' });
    }

    const newPoll = {
      ...body,
      options: body.options.map((option) => {
        return {
          ...option,
          _id: new ObjectId(),
          votes: [],
        };
      }),
    };

    const createdPoll = await pollsCollection.insertOne(newPoll);

    if (createPoll) {
      return res
        .status(201)
        .json({ message: 'Poll created successfully', createdPoll });
    }

    res.status(400).json({ message: 'Failed to create poll' });
  } catch (error) {
    next(error);
  }
};

// Update a poll by its ID
export const updatePoll = async (req, res, next) => {
  try {
    const {
      params: { pollId },
      body,
    } = req;

    const updatedPoll = {
      ...body,
      options: body.options.map((option) => {
        return {
          ...option,
          _id: option._id ? option._id : new ObjectId(),
          votes: option.votes ? option.votes : [],
        };
      }),
    };

    const updateResult = await pollsCollection.updateOne(
      { _id: new ObjectId(pollId) },
      { $set: updatedPoll },
      { upsert: true }
    );

    if (updateResult.modifiedCount > 0) {
      return res.status(200).json({ message: 'Poll updated successfully' });
    }

    res.status(404).json({ message: 'Poll not found' });
  } catch (error) {
    next(error);
  }
};

// Delete a poll by its ID
export const deletePoll = async (req, res, next) => {
  try {
    const { pollId } = req.params;

    const result = await pollsCollection.deleteOne({
      _id: new ObjectId(pollId),
    });

    if (result.deletedCount > 0) {
      return res.status(200).json({ message: 'Poll deleted successfully' });
    }

    res.status(404).json({ message: 'Poll not found' });
  } catch (error) {
    next(error);
  }
};

export const updatePollVotes = async (req, res, next) => {
  try {
    const { pollId } = req.params;
    const { userId, optionId } = req.body;

    const poll = await pollsCollection.findOne({ _id: new ObjectId(pollId) });

    const filteredOptions = poll.options.map((option) => {
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
    const updatedPoll = {
      ...poll,
      options: updatedOptions,
    };

    const result = await pollsCollection.updateOne(
      { _id: new ObjectId(pollId) },
      { $set: updatedPoll }
    );

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
