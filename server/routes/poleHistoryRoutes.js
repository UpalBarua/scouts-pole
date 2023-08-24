import { Router } from "express";
import { createPoleHistory, getPoleHistory, getPoleHistoryById } from "../controllers/poleHistoryController.js";

const router = new Router();

router.get("/history", getPoleHistory);
router.get("/history/:historyId", getPoleHistoryById);
router.post("/:poleId/history", createPoleHistory);

export default router;