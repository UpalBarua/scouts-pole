import mongoClient from '../db/mongoClient.js';

export const getData = async (req, res) => {
  try {
    const foundData = await mongoClient
      .db('scouts-pole')
      .collection('test')
      .find({})
      .toArray();

    res.status(200).json(foundData);
  } catch (error) {
    res.status(500).json(error);
  }
};
