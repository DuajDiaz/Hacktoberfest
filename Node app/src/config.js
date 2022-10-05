require("dotenv/config");

module.exports = {
	api: process.env.API_URL || "api",
	port: process.env.PORT || 4000,
	sendEmailAddress: process.env.SEND_EMAIL_ADDRESS,
	sendEmailPassword: process.env.SEND_EMAIL_PASSWORD,
};
