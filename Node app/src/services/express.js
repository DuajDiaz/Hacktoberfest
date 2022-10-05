const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const config = require("../config");

const { mailService } = require("../services/mail");

const app = express();

app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get(`${config.api}/`, (req, res) => {
	return res.json({ message: "Hello!" });
});

let list = ["test@example.com"];

app.get(`${config.api}/send`, (req, res) => {
	for (let email of list) {
		mailService({ email });
	}
	return res.json({ message: "Successful!" });
});

exports.start = () => {
	app.listen(config.port, (err) => {
		if (err) {
			console.error(`Error ${err}`);
			process.exit(-1);
		}

		console.log(`Server ready at http://localhost:${config.port} 🚀`);
	});
};
