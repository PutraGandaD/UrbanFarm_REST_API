const express = require("express")
const router = express.Router()

const bahanController = require("../controller/bahan.controller")

router.get("/", bahanController.getAll)
router.get("/:id", bahanController.getById)
router.get("/jenistanaman/:jenisTanaman/:metodeTanam", bahanController.getByJenisTanaman)
router.post("/", bahanController.create)
router.put("/:id", bahanController.update)
router.delete("/:id", bahanController.delete)

module.exports = router