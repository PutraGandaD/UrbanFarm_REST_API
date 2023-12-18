const pool = require("../database/index")

const videosController = {
    getAll: async(req, res) => {
        try {
            const [rows, fields] = await pool.query("select * from videos")
            res.json({
                data: rows
            })
        } catch (error) {
            console.log(error)
            res.json({
                state: "error"
            })
        }
    },
    getById : async(req, res) => {
        try {
            const { id } = req.params
            const [rows, fields] = await pool.query("select * from videos where id = ?", [id])
            res.json({
                data: rows
            })
        } catch (error) {
            console.log(error)
            res.json({
                state: "error"
            })
        }
    },
    create: async(req, res) => {
        try {
            const { title, imgurl, videourl } = req.body
            const sql = "insert into videos (title, imgurl, videourl) values (?, ?, ?)"
            const [rows, fields] = await pool.query(sql, [title, imgurl, videourl])
            res.json({
                data: rows
            })
        } catch (error) {
            console.log(error)
            res.json({
                state: "error"
            })
        }
    },

    update: async(req, res) => {
        try {
            const {title, imgurl, videourl} = req.body
            const { id } = req.params
            const sql = "update videos set title = ?, imgurl = ?, videourl = ? where id = ?"
            const [rows, fields] = await pool.query(sql, [title, imgurl, videourl, id])
            res.json({
                data: rows
            })
        } catch (error) {
            console.log(error)
            res.json({
                state: "error"
            })
        }
    },

    delete: async (req, res) => {
        try {
            const { id } = req.params
            const [rows, fields] = await pool.query("delete from videos where id = ?" , [id])
            res.json({
                data: rows
            })
        } catch (error) {
            console.log(error)
            res.json({
                state: "error"
            })
        }
    }
}

module.exports = videosController