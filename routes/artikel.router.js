const express = require("express")
const router = express.Router()

const artikelController = require("../controller/artikel.controller")

router.get("/", artikelController.getAll)
router.get("/:id", artikelController.getById)
router.post("/", artikelController.create)
router.put("/:id", artikelController.update)
router.delete("/:id", artikelController.delete)

module.exports = router