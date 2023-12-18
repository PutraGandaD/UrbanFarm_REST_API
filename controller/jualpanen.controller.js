const pool = require("../database/index")

const jualPanenController = {
    getAll: async(req, res) => {
        try {
            const [rows, fields] = await pool.query("select * from jualpanen")
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
    getByIdUser : async(req, res) => {
        try {
            const { id_user } = req.params
            const [rows, fields] = await pool.query("select * from jualpanen where id_user = ?", [id_user])
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
            const [rows, fields] = await pool.query("select * from jualpanen where id = ?", [id])
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
            const { id_user, username, profileimg_url, title, content, whatsapp_no, contentimg_url, kota, jenisTanaman, metodeTanam } = req.body
            const sql = "insert into jualpanen (id_user, username, profileimg_url, title, content, whatsapp_no, contentimg_url, kota, jenisTanaman, metodeTanam) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"
            const [rows, fields] = await pool.query(sql, [id_user, username, profileimg_url, title, content, whatsapp_no, contentimg_url, kota, jenisTanaman, metodeTanam])
            res.json({
                success: true,
                message: 'Jual panen created successfully',
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
            const { id_user, username, profileimg_url, title, content, whatsapp_no, contentimg_url, kota, provinsi, jenisTanaman, metodeTanam } = req.body
            const { id } = req.params
            const sql = "update jualpanen set id_user = ?, username = ?, profileimg_url = ?, title = ?, content = ?, whatsapp_no = ?, contentimg_url = ?, kota = ?, jenisTanaman = ?, metodeTanam = ? where id = ?"
            const [rows, fields] = await pool.query(sql, [id_user, username, profileimg_url, title, content, whatsapp_no, contentimg_url, kota, jenisTanaman, metodeTanam, id])
            res.json({
                success: true,
                message: 'Jual panen updated successfully',
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
            const [rows, fields] = await pool.query("delete from jualpanen where id = ?" , [id])
            res.json({
                success: true,
                message: 'Jual panen deleted successfully',
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

module.exports = jualPanenController