const express = require("express")
const router = express.Router()

const alatController = require("../controller/alat.controller")

router.get("/", alatController.getAll)
router.get("/:id", alatController.getById)
router.get("/jenistanaman/:jenisTanaman/:metodeTanam", alatController.getByJenisTanaman)
router.post("/", alatController.create)
router.put("/:id", alatController.update)
router.delete("/:id", alatController.delete)

module.exports = router