const express = require('express');
const pessoaRoute = require('./pessoaRoute.js');

module.exports = app => {
	app.use(
		express.json(),
		pessoaRoute
	);
};