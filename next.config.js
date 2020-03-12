require('dotenv').config();
const withCSS = require('@zeit/next-css');

module.exports = withCSS({
	env: {
		mongodb_url: process.env.MONGODB_URL
	}
});
