const express = require("express");
const router = express.Router();
const RetsiController = require("../Controllers/AppController")

router.get("/", RetsiController.getCharacter)
router.post("/newCharacter", RetsiController.postNewCharacter)
router.put("/Character/:id")
router.delete("/RemoveCharacter")

module.exports = router;
