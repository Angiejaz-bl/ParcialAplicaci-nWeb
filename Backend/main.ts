import dotenv from "dotenv";
dotenv.config();

import { app } from "./src/app";
import { sequelize } from "./src/infrastructure/database/sequelize";
import { setupAssociations } from "./src/infrastructure/database/associations";

const PORT = Number(process.env.PORT) || 3000;

const startServer = async () => {
  try {
    setupAssociations();
    await sequelize.authenticate();
    console.log("Conectado a la base de datos");

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Error starting server:", error);
  }
};

startServer();