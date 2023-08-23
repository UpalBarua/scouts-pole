import { ObjectId } from "mongodb";
import mongoClient from "../db/mongoClient.js";

const poleHistoryCollection = mongoClient
  .db("scouts-pole")
  .collection("poleHistory");

export const getPoleHistory = async (req, res) => {
  try {
    const poleHistory = await poleHistoryCollection.find({}).toArray();
    res.status(200).json(poleHistory);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching pole history", error: error.message });
  }
};

export const getPoleHistoryById = async (req, res) => {
  try {
    const historyId = req.params.historyId;
    const query = { _id: new ObjectId(historyId) };

    const history = await poleHistoryCollection.findOne(query);

    if (history) {
      return res.status(200).json(history);
    } else {
      return res.status(404).json({ message: "Pole history not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching pole history", error: error.message });
  }
};

export const createPoleHistory = async (req, res) => {
  try {
    const poleHistory = req.body;
    const result = await poleHistoryCollection.insertOne(poleHistory);
    res
      .status(201)
      .json({ message: "Pole history created successfully", result });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating pole history", error: error.message });
  }
};
