import express, { Application } from 'express';

const app: Application = express();

app.set("server-port",4000 );
app.use(express.json());

export default app;