const express = require("express");
const router = express.Router();
const RetsiController = require("../Controllers/appController")

router.get("/character", RetsiController.getListado)
router.post("/newCharacter", RetsiController.postNewListado)
router.put("/Character/:id")
router.delete("/RemoveCharacter")

module.exports = router;
