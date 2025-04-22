import { Router } from 'express';
import * as PlayController  from './controllers/players-controller';
import * as ClubController  from './controllers/clubs-controller';

const router = Router();

router.get("/players", PlayController.getPlayer);
router.post("/players", PlayController.postPlayer);
router.patch("/players/:id", PlayController.updatePlayer);
router.delete("/players/:id", PlayController.deletePlayer);
router.get("/players/:id", PlayController.getPlayerById);

router.get("/clubs", ClubController.getClubs);

export default router