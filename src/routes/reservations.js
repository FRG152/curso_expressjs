import {
  getReservations,
  updateReservations,
  deleteReservations,
  createReservations,
} from "../controllers/reservationsController.js";
import { Router } from "express";
import { authenticateToken } from "../middlewares/auth.js";

const reservationsRouter = Router();

reservationsRouter.post("/", authenticateToken, createReservations);
reservationsRouter.get("/:id", authenticateToken, getReservations);
reservationsRouter.put("/:id", authenticateToken, updateReservations);
reservationsRouter.delete("/:id", authenticateToken, deleteReservations);

export default reservationsRouter;
