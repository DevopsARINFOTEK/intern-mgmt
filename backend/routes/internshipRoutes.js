const express = require("express");
const router = express.Router();

const {
 registerIntern,
 getAllInterns
} = require("../controllers/internshipController");

router.post("/register", registerIntern);

router.get("/all", getAllInterns);

module.exports = router;