import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { PrismaClient } from "../../generated/prisma/index.js";

const prisma = new PrismaClient();

export const registerUser = async (email, password, name) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      name,
      role: "ADMIN",
    },
  });
  return newUser;
};

export const loginUser = async (email, password) => {
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    throw new Error("Invalid email or password");
  }

  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword) {
    throw new Error("Invalid email or password");
  }

  const token = jwt.sign(
    { id: user.id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "4h" }
  );

  return token;
};
