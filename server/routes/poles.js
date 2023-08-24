import { Router } from "express";
import { createPole, deletePole, getPoleById, getPoles, updatePole } from "../controllers/poleController.js";



const router = new Router();

router.get("/poles", getPoles);
router.get("/poles/:poleId", getPoleById);
router.post("/poles", createPole);
router.put("/poles/:poleId", updatePole);
router.delete("/poles/:poleId", deletePole);

export default router;
