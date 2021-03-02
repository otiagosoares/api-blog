class UserController {

    async index(req, res) {

    }

    async create(req, res) {

        const { name, email, password, role } = req.body;
        console.log('aqio');
        res.send("oopa")
    }
}

module.exports = new UserController();