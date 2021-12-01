const express = require("express");
const { getNotes, createNotes, deleteNotes } = require("../controllers/noteController");

const router = express.Router();

router.route("/").get(getNotes);
router.route("/:id").delete(deleteNotes);

router.route("/create").post(createNotes);


module.exports = router;