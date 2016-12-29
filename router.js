const optfile = require('./modules/optfile');

module.exports = {
	login(req, res) {
		const recall = (data) => {
			res.write(data);
			res.end('');
		};
		optfile.readfile('./views/login.html', recall);
	},
	zhuce(req, res) {
		const recall = (data) => {
			res.write(data);
			res.end('');
		};
		optfile.readfile('./views/zhuce.html', recall);
	}
};