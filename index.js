const express = require("express")
const app = express()

require('dotenv').config()

const articlesRouter = require('./routes/articles.router')
const videosRouter = require('./routes/videos.router')
const jualPanenRouter = require('./routes/jualpanen.router')
const alatRouter = require('./routes/alat.router')

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use("/api/v1/articles", articlesRouter)
app.use("/api/v1/videos", videosRouter)
app.use("/api/v1/jualpanen", jualPanenRouter)
app.use("/api/v1/alat", alatRouter)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log("Server running....")
})
