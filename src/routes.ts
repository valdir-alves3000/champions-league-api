import { Router } from "express";
import * as PlayerController from "./controllers/players-controller";

const router = Router()

router.get("/players", PlayerController.getPlayer)
router.get("/players/:id", PlayerController.getPlayerById)


router.post("/players", PlayerController.postPlayer)
router.delete("/players/:id", PlayerController.deletePlayerById)
router.patch("/players/:id", PlayerController.updatePlayerById)

export { router };
