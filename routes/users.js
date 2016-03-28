var users = require('../controllers/users.server.controller');

module.exports = function(app) {
	app.route('/adduser').get(users.renderAdduser).post(users.adduser);
	app.route('/api/users').post(users.create).get(users.list);
	app.route('/api/users/:userId').get(users.read).put(users.update).delete(users.delete);
	app.param('userId', users.userByID);
};
