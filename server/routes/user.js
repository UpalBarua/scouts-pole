import { Router } from "express";
import mongoClient from "../db/mongoClient";
import {
  createUser,
  deleteUser,
  getUsers,
  updateUser,
} from "../controllers/userController";

const router = new Router();

router.get("/users/:id", getUsers);

router.post("/users", createUser);

//User Updating Route
router.put("/users/:id", updateUser);

// Deleting user Route
router.delete("/users/:id", deleteUser);

export default router;
