import express from "express";
import morgan from "morgan";

import campeonRoutes from "./routes/index.routes"

const app = express();

//Puerto
app.set("port",4000);

//Midlewares
app.use(morgan("dev"));
app.use(express.json());

app.use("/api-restful/campeones",campeonRoutes);

export default app;