import { getUserAppointmentsService } from "../services/appointmentsService.js";

export const getUserAppointments = async (req, res) => {
  try {
    const userId = req.params.id;
    const appointments = await getUserAppointmentsService(userId);
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ error: "Erros al obtener el historial de citas" });
  }
};
