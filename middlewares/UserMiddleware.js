class UserMiddleware {

    async validate(req, res, next) {

        const { name, email, password, role } = req.body;

        if (name == undefined || name.length < 3) {
            res.status(400).json({
                message: "Name invalid!",
            });
            return false;
        }


        if (true) {
            res.status(400).json({
                message: "Email invalid!",
            });
            return false;
        }

        if (password == undefined) {
            res.status(400).json({
                message: "Password is required!",
            });
            return false;
        }

        console.log('aqui 2');
        next();
    }

    async validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
}

module.exports = new UserMiddleware;