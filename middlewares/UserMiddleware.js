const User = require("../models/User");

class UserMiddleware {

    async validate(req, res, next) {
        console.log(process.env.DATABASE_USER)
        const { name, email, password, role } = req.body;

        if (name == undefined || name.length < 3) {
            res.status(400).json({
                message: "Name invalid!",
            });
            return;
        }

        if (email == undefined) {
            res.status(400).json({
                message: "Email invalid!",
            });
            return;
        }

        if (password == undefined) {
            res.status(400).json({
                message: "Password is required!",
            });
            return;
        }

        next();
    }

    async validateEmailIsUnique(req, res, next) {

        try {
            const { email } = req.body;

            const exists = await User.findEmail(email);

            if (exists) {
                return res.status(400).json({
                    message: "Este e-mail já está cadastrado!"
                });
            }

            next();

        } catch (error) {
            console.log(error);
        }
    }

    async isEmailValid(req, res, next) {

        const { email } = req.body;
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const reult = re.test(String(email).toLowerCase());

        if (!reult) {
            return res.status(400).json({
                message: "Este e-mail é inválido!"
            });
        }

        next();
    }
}

module.exports = new UserMiddleware;