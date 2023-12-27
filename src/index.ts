import dbConnection from "config/database";
import dotenv from "dotenv";
dotenv.config();
import app from "./app";

const port = app.get("server-port");

dbConnection();

app.listen(port, () => {
  console.log("Application on port", port);
});
