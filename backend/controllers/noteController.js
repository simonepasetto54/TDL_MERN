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
        const { title, content, priority, startDate, endDate } = req.body;
        if (!title || !content || !priority || !startDate || !endDate) {
            res.status(400);
            throw new Error('Completare tutti i campi');
        } else {
            const note = new Note({ title, content, priority, startDate, endDate });

            const createdNote = await note.save();

            res.status(201).json(createdNote);
        }
    }
);

module.exports = { getNotes, createNotes }