import routes from "./routes/index.js";
import express from "express";
import bodyParser from "body-parser";
import { LoggerMiddleware } from "./middlewares/logger.js";
import { errorHandler } from "./middlewares/errorHandler.js";

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(LoggerMiddleware);
app.use(errorHandler);

app.use("/api", routes);

export default app;
