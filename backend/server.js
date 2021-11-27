const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const noteRoutes = require("./routes/noteRoutes");

const app = express();
dotenv.config();
const _PORT = process.env.PORT || 5000;
connectDB();
app.use(express.json());

// app.get("/", (req, res) => {
//     res.send("Api is running");
// });

// app.get("/api/notes", (req, res) => {
//     res.json(notes);
// })

// app.get("/api/notes/:id", (req, res) => {
//     const note = notes.find((n) => n._id === req.params.id);
//     res.send(note);
// })

app.use('/api/notes', noteRoutes)

app.listen(_PORT, console.log(`Server is running on port ${_PORT}`));