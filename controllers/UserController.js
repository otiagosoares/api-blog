const User = require("../models/User");

class UserController {

    async index(req, res) { }

    async create(req, res) {

        try {
            const { name, email, password, role } = req.body;

            const resp = await User.create(name, email, password);

            if (resp.errno) {
                res.status(403).json({
                    messsage: resp.sqlMessage,
                    data: resp,
                });
            } else {
                res.status(200).json({
                    messsage: "Created!",
                    data: {
                        id: resp
                    },
                });
            }

        } catch (err) {
            res.status(500).json({
                messsage: err.messsage
            })
        }
        res.send("oopa")
    }
}

module.exports = new UserController();