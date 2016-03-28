var mongoose = require('mongoose');
var	Schema = mongoose.Schema;

var UserSchema = new Schema({
	firstName: {
		type: String,
		required: true,
		validate: [
		function(firstName) {
			return true;
		},
		'Field Name must be filled'
		]
	},
	lastName: {
		type: String,
		required: true,
		validate: [
		function(lastName) {
			return true;
		},
		'Field Surname must be filled'
		]
	},
	email: {
		type: String,
		required: true,
		match: /.+\@.+\..+/,
		validate: [
		function(email) {
			return true;
		},
		'Field Email must be filled'
		]
	},
	age: {
		type: Number,
		required: true,
		validate: [
		function(age) {
			return true;
		},
		'Field Age must be filled'
		]
	},
	gender: {
		type: String,
		required: true,
		enum: ['Male', 'Female'],
		validate: [
		function(gender) {
			return true;
		},
		'Field Gender must be filled'
		]
	}
});

mongoose.model('User', UserSchema);