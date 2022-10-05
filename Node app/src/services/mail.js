
var nodemailer = require("nodemailer");

const config = require("../config");

exports.mailService = async (props) => {
	const html = ``;

	let transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: config.sendEmailAddress,
			pass: config.sendEmailPassword,
		},
	});

	if (props.email) {
		let info = await transporter.sendMail({
			from: `"FROM NAME" <${config.sendEmailAddress}>`,
			to: props.email,
			subject: "SUBJECT",
			html: html,
		});

		console.log(`Message sent to ${props.email}`);
	}
};
