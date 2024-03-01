import { Router } from "express";
import userRoutes from "./user.routes";
import deckRoutes from "./deck.routes"
const router = Router();

router.use("/user", userRoutes);
router.use("/deck", deckRoutes)

export default router;
