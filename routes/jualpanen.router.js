const express = require("express")
const router = express.Router()

const jualPanenController = require("../controller/jualpanen.controller")

router.get("/", jualPanenController.getAll)
router.get("/:id_user", jualPanenController.getByIdUser)
router.get("/:id", jualPanenController.getById)
router.post("/", jualPanenController.create)
router.put("/:id", jualPanenController.update)
router.delete("/:id", jualPanenController.delete)

module.exports = router