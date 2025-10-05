import { PrismaClient } from "../../generated/prisma/index.js";

const prisma = new PrismaClient();

export const createTimeBlockService = async (startTime, endTime) => {
  const newTimeBlock = await prisma.timeBlock.create({
    data: {
      startTime: new Date(startTime),
      endTime: new Date(endTime),
    },
  });
  return newTimeBlock;
};

export const listReservationsServices = async () => {
  const reservations = await prisma.appointment.findMany({
    include: {
      user: true,
      timeBlock: true,
    },
  });
  return reservations;
};
