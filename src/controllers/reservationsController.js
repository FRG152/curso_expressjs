import {
  createReservationsService,
  getReservationsService,
  updateReservationsService,
  deleteReservationsService,
} from "../services/reservationsService.js";

export const createReservations = async (req, res) => {
  try {
    const reservations = await createReservationsService(req.body);
    res.status(201).json(reservations);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getReservations = async (req, res) => {
  try {
    const reservations = await getReservationsService(req.params.id);
    if (!reservations) {
      return res.status(404).json({ error: "Reservation not found" });
    }
    res.json(reservations);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const updateReservations = async (req, res) => {
  try {
    const reservations = await updateReservationsService(
      req.params.id,
      req.body
    );

    if (!reservations) {
      return res.status(404).json({ error: "Reservation not found" });
    }

    res.json(reservations);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteReservations = async (req, res) => {
  try {
    const reservations = await deleteReservationsService(req.params.id);

    if (!reservations) {
      return res.status(404).json({ error: "Reservation not found" });
    }

    res.status(204).json({ message: "Reservation deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
