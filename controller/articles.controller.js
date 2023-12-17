const pool = require("../database/index")

const artikelController = {
    getAll: async(req, res) => {
        try {
            const [rows, fields] = await pool.query("select * from articles")
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
            const [rows, fields] = await pool.query("select * from articles where id = ?", [id])
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
            const { title, content, imgurl } = req.body
            const sql = "insert into articles (title, content, imgurl) values (?, ?, ?)"
            const [rows, fields] = await pool.query(sql, [title, content, imgurl])
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
            const {title, content, imgurl} = req.body
            const { id } = req.params
            const sql = "update articles set title = ?, content = ?, imgurl = ? where id = ?"
            const [rows, fields] = await pool.query(sql, [title, content, imgurl, id])
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
            const [rows, fields] = await pool.query("delete from articles where id = ?" , [id])
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

module.exports = artikelController