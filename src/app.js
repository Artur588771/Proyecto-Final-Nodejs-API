import express from "express";
import morgan from "morgan";

import productRoutes from "./routes/index.routes"

const app = express();

//Puerto
app.set("port",4000);

//Midlewares
app.use(morgan("dev"));
app.use(express.json());

app.use("/api-restful/products",productRoutes);

export default app;