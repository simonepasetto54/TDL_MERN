const Note = require("../models/noteModel");
const asyncHandler = require("express-async-handler");

const getNotes = asyncHandler(
    async (req, res) => {
        const notes = await Note.find();
        res.json(notes);
    }
);

const createNotes = asyncHandler(
    async (req, res) => {
        const { title, content, category } = req.body;
        if (!title || !content || !category) {
            res.status(400);
            throw new Error('Completare tutti i campi');
        } else {
            const note = new Note({ title, content, category });

            const createdNote = await note.save();

            res.status(201).json(createdNote);
        }
    }
);

module.exports = { getNotes, createNotes }