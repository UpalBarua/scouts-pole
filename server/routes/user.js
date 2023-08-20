import { Router } from "express";
import mongoClient from "../db/mongoClient";

const router = new Router();
const usersCollection = mongoClient.db("scouts-pole").collection("users");

router.get("/users", async (req, res) => {
  try {
    const result = await usersCollection.find().toArray();
    res.json({ result });
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error: error.message });
  }
});


router.post("/users", async (req, res) => {
  try {
    const user = req.body;
    const query = { email: user.email };

    const existingUser = await usersCollection.findOne(query);

    if (existingUser) {
      return res.json({ message: "User Already Exists" });
    }

    const result = await usersCollection.insertOne(user);
    res.status(201).json({ message: "User created successfully", result });
  } catch (error) {
    res.status(500).json({ message: "Error creating user", error: error.message });
  }
});


export default router;
