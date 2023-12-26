import express, { Request, Response, NextFunction } from "express";
import "./index";
import bodyParser from "body-parser";
import userRoutes from "./routes/user";
import "dotenv/config";
const app = express();

// Cargar rutas

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cabeceras http
app.use((_req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Allow", "GET, PUT, POST, DELETE, OPTIONS");
  next();
});

app.use("/api", userRoutes);

export default app;
