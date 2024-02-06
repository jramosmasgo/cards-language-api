import express, { Application } from "express";
import { default as routes } from "@routes/index.routes";
import errorMiddleware from "@middlewares/error.middleware";

const app: Application = express();

app.set("server-port", 4000);
app.use(express.json());
app.use(routes);
app.use(errorMiddleware);

export default app;
