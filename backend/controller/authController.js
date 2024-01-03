const { sql } = require("../config/pgDb");
const bcrypt = require("bcrypt");

const signup = async (req, res) => {
	try {
		console.log("SINGUP");
		const { name, email, password } = req.body;

		const findUser = await sql`SELECT email FROM users WHERE email=${email}`;
		console.log("FFIND", findUser);
		if (findUser.length > 0) {
			return res.status(400).json({ message: "User email is already exist" });
		}

		const hashedPassword = bcrypt.hashSync(password, 10);
		const data =
			await sql`INSERT INTO users(email, name, password) VALUES(${email}, ${name}, ${hashedPassword}) RETURNING id`;
		const { id } = data[0];
		res.status(201).json({ message: "success", user: { id } });
	} catch (error) {
		console.log("ERR", error);
		res.status(500).json({ message: "failed" });
	}
};

const signin = async (req, res) => {
	try {
		const { userEmail, userPassword } = req.body;

		const findUser =
			await sql`select name, email from users where email=${userEmail}`;

		if (findUser.length === 0) {
			return res.status(400).json({ message: "success", user });
		}

		const isCheck = bcrypt.compareSync(userPassword, user[0].password);

		if (!isCheck) {
			return res.status(400).json({ message: "wrong username or password" });
		}

		const { password, ...user } = findUser[0];

		res.status(201).json({ message: "success", user });
	} catch (error) {
		console.log("ERR, error");
		res.status(500).json({ message: "failed" });
	}
};

module.exports = { signup, signin };
