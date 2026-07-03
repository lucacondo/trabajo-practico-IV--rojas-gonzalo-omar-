import express from "express";
import morgan from "morgan";

const app = express();
const PORT = 3000;

//Middleware
app.use(express.json());

app.listen(PORT, async () => {
    await startDB();
    console.log(`Servidor listo https://localhost:${PORT}`);
})