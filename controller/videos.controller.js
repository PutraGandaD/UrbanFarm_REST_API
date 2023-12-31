const pool = require("../database/index")

const videosController = {
    getAll: async(req, res) => {
        try {
            const [rows, fields] = await pool.query("select * from videos ORDER BY id DESC")
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
            const { title, imgurl, videourl, source } = req.body
            const sql = "insert into videos (title, imgurl, videourl, source) values (?, ?, ?, ?)"
            const [rows, fields] = await pool.query(sql, [title, imgurl, videourl, source])
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
            const {title, imgurl, videourl, source} = req.body
            const { id } = req.params
            const sql = "update videos set title = ?, imgurl = ?, videourl = ?, source = ? where id = ?"
            const [rows, fields] = await pool.query(sql, [title, imgurl, videourl, source, id])
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