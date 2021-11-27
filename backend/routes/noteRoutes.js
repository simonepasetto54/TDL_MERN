const express = require("express");
const { getNotes, createNotes } = require("../controllers/noteController");

const router = express.Router();

router.route("/").get(getNotes);
// router.route("/:id")
//         .get();
//         .put();
//         .delete();

router.route("/create").post(createNotes);


module.exports = router;