import { Router } from "express";
import { authRouter } from "./auth.js";
import { adminRouter } from "./admin.js";

const routes = Router();

routes.use("/auth", authRouter);
routes.use("/admin", adminRouter);

export default routes;
