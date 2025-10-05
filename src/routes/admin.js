import {
  createTimeBlocks,
  listReservations,
} from "../controllers/adminController.js";
import { Router } from "express";

const router = Router();

router.post("/time-blocks", createTimeBlocks);
router.get("/reservations", listReservations);
