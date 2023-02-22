const express = require("express");
const router = express.Router();
const RetsiController = require("../Controllers/appController")

router.get("/character", RetsiController.getListado)
router.post("/newCharacter", RetsiController.postNewListado)
router.put("/Character/:id", RetsiController.putListado)
router.delete("/RemoveCharacter", RetsiController.deleteListado)

module.exports = router;
