const express = require("express")
const app = express()

require('dotenv').config()

const artikelRouter = require('./routes/artikel.router')
const videoRouter = require('./routes/video.router')

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use("/api/v1/artikel", artikelRouter)
app.use("/api/v1/video", videoRouter)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log("Server running....")
})
