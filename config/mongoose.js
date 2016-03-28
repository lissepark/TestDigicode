var config = require('./config'),
	mongoose = require('mongoose');

module.exports = function() {
	var db = mongoose.connect(config.url);
	require('../models/user.server.model.js');
	return db;
};