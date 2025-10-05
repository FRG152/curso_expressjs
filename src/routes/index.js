import { Router } from "express";
import authRouter from "./auth.js";
import adminRouter from "./admin.js";
import reservationsRouter from "./reservations.js";

const routes = Router();

routes.use("/auth", authRouter);
routes.use("/admin", adminRouter);
routes.use("/reservations", reservationsRouter);

export default routes;
