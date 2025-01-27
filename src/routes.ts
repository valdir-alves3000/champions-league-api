import { Router } from "express";
import * as ClubController from "./controllers/clubs-controller";
import * as PlayerController from "./controllers/players-controller";

const router = Router()

router.get("/players", PlayerController.getPlayer)
router.get("/players/:id", PlayerController.getPlayerById)


router.post("/players", PlayerController.postPlayer)
router.delete("/players/:id", PlayerController.deletePlayerById)
router.patch("/players/:id", PlayerController.updatePlayerById)

router.get("/clubs", ClubController.getClub)
router.get("/clubs/:name", ClubController.getClubByName)

export { router };
