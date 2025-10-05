import { PrismaClient } from "../../generated/prisma/index.js";

const prisma = new PrismaClient();

export const getUserAppointmentsService = async (id) => {
  try {
    const appointments = await prisma.appointment.findMany({
      where: { userId: parseInt(id, 10) },
      include: {
        timeBlock: true,
      },
    });
    return appointments;
  } catch (error) {
    throw new Error("Error al obtener el historial de citas.");
  }
};
