const express = require("express");
const router = express.Router();
const RetsiController = require("../Controllers/appController")

router.get("/character", RetsiController.getListado)
router.post("/newCharacter", RetsiController.postNewListado)
router.put("/EditCharacter/:id", RetsiController.putEditListado)
router.delete("/RemoveCharacter/:id", RetsiController.deleteListado)

module.exports = router;
