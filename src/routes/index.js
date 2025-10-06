import { Router } from "express";

// Rutas
import authRouter from "./auth.js";
import adminRouter from "./admin.js";
import reservationsRouter from "./reservations.js";
import appointmentsRouter from "./appointments.js";

const routes = Router();

routes.use("/auth", authRouter);
routes.use("/admin", adminRouter);
routes.use("/reservations", reservationsRouter);
routes.use("/appointments", appointmentsRouter);

export default routes;
