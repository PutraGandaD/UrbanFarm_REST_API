const pool = require("../database/index")

const alatController = {
    getAll: async(req, res) => {
        try {
            const [rows, fields] = await pool.query("select * from alat")
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
            const [rows, fields] = await pool.query("select * from alat where id = ?", [id])
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
    getByJenisTanaman : async(req, res) => {
        try {
            const { jenisTanaman } = req.params
            const [rows, fields] = await pool.query("select * from alat where jenisTanaman = ?", [jenisTanaman])
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
            const { title, url_beli, url_gambar, jenisTanaman } = req.body
            const sql = "insert into alat (title, url_beli, url_gambar, jenisTanaman) values (?, ?, ?, ?)"
            const [rows, fields] = await pool.query(sql, [title, url_beli, url_gambar, jenisTanaman, id])
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
            const {title, url_beli, url_gambar, jenisTanaman} = req.body
            const { id } = req.params
            const sql = "update alat set title = ?, url_beli = ?, url_gambar = ?, jenisTanaman = ? where id = ?"
            const [rows, fields] = await pool.query(sql, [title, url_beli, url_gambar, jenisTanaman, id])
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
            const [rows, fields] = await pool.query("delete from alat where id = ?" , [id])
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

module.exports = alatController