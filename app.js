import express from "express";
import morgan from "morgan";
import { startDB } from "./src/config/database.js";
import { Movie } from "./src/models/movie.model.js";

const app = express();
const PORT = 3000;

//Middleware
app.use(express.json());

app.listen(PORT, async () => {
    await startDB();
    console.log(`Servidor listo https://localhost:${PORT}`);
})