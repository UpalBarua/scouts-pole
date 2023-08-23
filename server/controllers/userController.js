import mongoClient from "../db/mongoClient.js";

export const getUsers = async (req, res) => {
  try {
    const userEmail = req.params.email;
    const query = { email: userEmail };

    const user = await mongoClient
      .db("scouts-pole")
      .collection("users")
      .findOne(query);

    if (user) {
      return res.status(200).json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching users", error: error.message });
  }
};

export const createUser = async (req, res) => {
  try {
    const user = req.body;
    const usersCollection = mongoClient.db("scouts-pole").collection("users");

    if (!user.email || !user.name) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const query = { email: user.email };
    const existingUser = await usersCollection.findOne(query);

    if (existingUser) {
      return res.json({ message: "User already exists" });
    }

    const result = await usersCollection.insertOne(user);
    res.status(201).json({ message: "User created successfully", result });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating user", error: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const UserEmail = req.params.email;
    const updatedUser = req.body;
    const usersCollection = mongoClient.db("scouts-pole").collection("users");

    if (!updatedUser.email || !updatedUser.name) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const query = { email: UserEmail };
    const update = { $set: updatedUser };
    const result = await usersCollection.updateOne(query, update);

    if (result.modifiedCount > 0) {
      return res.status(200).json({ message: "User updated successfully" });
    } else {
      return res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating user", error: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const userEmail = req.params.email;
    const usersCollection = mongoClient.db("scouts-pole").collection("users");
    const query = { email: userEmail };
    const result = await usersCollection.deleteOne(query);

    if (result.deletedCount > 0) {
      return res.status(200).json({ message: "User deleted successfully" });
    } else {
      return res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting user", error: error.message });
  }
};
