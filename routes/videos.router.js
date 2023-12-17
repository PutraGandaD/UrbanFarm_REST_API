const express = require("express")
const router = express.Router()

const videosController = require("../controller/videos.controller")

router.get("/", videosController.getAll)
router.get("/:id", videosController.getById)
router.post("/", videosController.create)
router.put("/:id", videosController.update)
router.delete("/:id", videosController.delete)

module.exports = router