import fs from "fs";
import path from "path";
import express from "express";
import bodyParser from "body-parser";
import { errorHandler } from "./src/middlewares/errorHandler.js";
import { fileURLToPath } from "url";
import { LoggerMiddleware } from "./src/middlewares/logger.js";
import { PrismaClient } from "./generated/prisma/index.js";

const app = express();
const prisma = new PrismaClient();

const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const usersFilePath = path.join(__dirname, "users.json");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(LoggerMiddleware);
app.use(errorHandler);

app.get("/users", async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error al comunicarse con la base de datos." });
  }
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
