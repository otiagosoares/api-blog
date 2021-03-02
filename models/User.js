const db = require('../database/connection');
const bcrypt = require("bcrypt");

class User {

    async create(name, email, password) {

        try {

            const hash = await bcrypt.hash(email, 10);

            const result = await db.insert({
                name,
                email,
                password: hash,
                role: 0
            }).table("users");

            return result;

        } catch (err) {
            console.error("Failed to insert:", err)
            return await err;
        }
    }

    async findEmail(email) {

        try {
            const result = await db
                .select("*")
                .from("users")
                .where({ email });
            if (result.length > 0)
                return true;
            else
                return false;

        } catch (error) {
            console.error("Failed to query:", err)
        }
    }
}

module.exports = new User();