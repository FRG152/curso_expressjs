import {
  createTimeBlock,
  listReservations,
} from "../controllers/adminController.js";
import { Router } from "express";
import { authenticateToken } from "../middlewares/auth.js";

const adminRouter = Router();

adminRouter.post("/time-blocks", authenticateToken, createTimeBlock);
adminRouter.get("/reservations", authenticateToken, listReservations);

export default adminRouter;
