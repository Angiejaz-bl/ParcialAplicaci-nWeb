import express from "express";
import cors from "cors";
import CategoriaRoutes from "./interfaces/routes/CategoriaRoutes";
import LibroRoutes from "./interfaces/routes/LibroRoutes";
import ReservaRoutes from "./interfaces/routes/ReservaRoutes";

export const app = express();

app.use(cors({ origin: "http://localhost:4200" }));
app.use(express.json());

app.use(CategoriaRoutes);
app.use(LibroRoutes);
app.use(ReservaRoutes);