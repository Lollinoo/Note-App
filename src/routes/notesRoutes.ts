import * as NoteController from "../controllers/notesController";
import express from "express";



// Configurazione dei router per endpoint /api/notes/
const router = express.Router();

// Ricerca di tutte le note
router.get("/", NoteController.getNotes); 

// Ricerca di una singola nota con ID specifico
router.get("/:noteID", NoteController.getNote); 

// Creazione di un post con ritorno 201 
router.post("/", NoteController.createNotes);

router.patch("/:noteID", NoteController.updateNote);

router.delete("/:noteID", NoteController.deleteNote);

export default router;