import { RequestHandler } from "express";
import NoteModel from "../models/noteSchema";

// Restuisce un oggetto con tutti le note presenti in DB
export const getNotes: RequestHandler = async(req, res, next) => {
    try{
        const notes = await NoteModel.find().exec();
        res.status(200).json(notes);
    }catch(error){
        next(error);
    }
};

// Restuisce un oggetto contenente l'oggetto con l id specificato
export const getNote: RequestHandler = async(req,res,next) => {
    try{
        const noteID = req.params.noteID;
        const note = await NoteModel.findById(noteID).exec();
        if (note === null ) res.status(404).json({error: "Not Found"});
        else res.status(200).json(note);
        
    }catch(error) {
        next(error);
    }
};

// Creazione di una nota utilizzando le richieste dal body
export const createNotes: RequestHandler = async(req, res, next) => {
    const title = req.body.title;
    const text = req.body.text;
    try {
        const newNote = await NoteModel.create({
            title: title,
            text: text
        });
        res.status(201).json(newNote);
    } catch (error) {
        next(error);
    }
};