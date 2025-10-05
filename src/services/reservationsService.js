import { PrismaClient } from "../../generated/prisma/index.js";

const prisma = new PrismaClient();

export const createReservationsService = async (data) => {
  const conflict = await prisma.appointment.findFirst({
    where: {
      date: data.date,
      timeBlockId: data.timeBlockId,
    },
  });

  if (conflict) {
    throw new Error("El horario ya esta ocupado");
  }

  return prisma.appointment.create({ data });
};

export const getReservationsService = async (id) => {
  const reservation = await prisma.appointment.findUnique({
    where: { id: parseInt(id, 10) },
  });
  return reservation;
};

export const updateReservationsService = async (id, data) => {
  const conflict = await prisma.appointment.findFirst({
    where: {
      date: data.date,
      timeBlockId: data.timeBlockId,
      id: { not: parseInt(id, 10) },
    },
  });

  if (conflict) {
    throw new Error("El horario solicitado ya esta ocupado");
  }

  return await prisma.appointment.update({
    where: {
      id: parseInt(id, 10),
      data,
    },
  });
};

export const deleteReservationsService = async (id) => {
  return prisma.appointment.delete({ where: { id: parseInt(id, 10) } });
};
