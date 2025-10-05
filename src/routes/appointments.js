import { Router } from "express";
import { authenticateToken } from "../middlewares/auth.js";
import { getUserAppointments } from "../controllers/appointmentsController.js";

const appointmentsRouter = Router();

appointmentsRouter.get(
  "/:id/appointments",
  authenticateToken,
  getUserAppointments
);

export default appointmentsRouter;
