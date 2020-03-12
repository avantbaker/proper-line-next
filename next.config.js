require('dotenv').config();
const withCSS = require('@zeit/next-css');

module.exports = withCSS({
	env: {
		MONGODB_URL: process.env.MONGODB_URL
	}
});
