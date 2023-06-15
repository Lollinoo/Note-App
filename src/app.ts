import "dotenv/config"
import express, { Request, Response, NextFunction } from "express";
import morgan from "morgan";
import notesRoutes from "./routes/notesRoutes";
// -------------

const app = express();
app.use(morgan("dev"));

// Parse all the requests to json format
app.use(express.json());


// Configurazione degli endpoint

app.use("/api/notes", notesRoutes ); // Router per api/notes


// Middleware per gli endpoint non esistenti
app.use((req: Request, res: Response, next: NextFunction) => {
    next(Error("Endpoint not found"));
})

//  Middleware for Automatic Error Handling
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
    // Gestione "basica" degli errori
    console.error();
    let errorMessage = "An unknown error occured";
    if (error instanceof Error) errorMessage = error.message;
    res.status(500).json({error: errorMessage}); // Lo status è da migliorare
});


export default app;