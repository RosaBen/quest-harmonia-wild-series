const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import program-related actions
const { browse, read, add } = require("../../../controllers/programActions");

// Route to get a list of programs
router.get("/", browse);

// Route to get a specific program by ID
router.get("/:id", read);

// Route to add a new program
router.post("/", add);

/* ************************************************************************* */

module.exports = router;
