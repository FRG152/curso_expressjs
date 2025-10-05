import { listReservationsServices } from "../services/adminService.js";
import { createTimeBlockService } from "../services/adminService.js";

export const createTimeBlock = async (req, res) => {
  if (req.user.role !== "ADMIN") {
    return res.status(403).json({ error: "Access denied" });
  }

  const { startTime, endTime } = req.body;

  try {
    const newTimeBlock = await createTimeBlockService(startTime, endTime);
    res.status(201).json(newTimeBlock);
  } catch (error) {
    res.status(500).json({ error: "Error creating time block" });
  }
};

export const listReservations = async (req, res) => {
  if (req.user.role !== "ADMIN") {
    return res.status(403).json({ error: "Access denied" });
  }

  try {
    const reservations = await listReservationsServices();
    res.json(reservations);
  } catch (error) {
    res.status(500).json({ error: "Error fetching reservations" });
  }
};
