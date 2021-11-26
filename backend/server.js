const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");
const connectDB = require("./config/db");


const app = express();
dotenv.config();
const _PORT = process.env.PORT || 5000;
connectDB();

app.get("/", (req, res) => {
    res.send("Api is running");
});

app.get("/api/notes", (req, res) => {
    res.json(notes);
})

app.get("/api/notes/:id", (req, res) => {
    const note = notes.find((n) => n._id === req.params.id);
    res.send(note);
})

app.listen(_PORT, console.log(`Server is running on port ${_PORT}`));