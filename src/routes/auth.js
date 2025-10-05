import { Router } from "express";
import { register, login } from "../controllers/authController.js";
import { authenticateToken } from "../middlewares/auth.js";

export const router = Router();

router.post("/register", register);
router.post("/login", login);

app.get("/protected-route", authenticateToken, (req, res) => {
  res.send("Esta es una ruta protegida");
});
