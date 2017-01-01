const optfile = require('./modules/optfile');

const getRecall = (req, res) => {
	res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
	const recall = (data) => {
		res.write(data);
		res.end(''); // 不写没有http协议尾
	};
	return recall;
};

module.exports = {
	login(req, res) {
		optfile.readfile('./views/login.html', getRecall);
	},
	zhuce(req, res) {
		const recall = (data) => {
			res.write(data);
			res.end('');
		};
		optfile.readfile('./views/zhuce.html', recall);
	},
	onewritefile (request, response) {
		function recall (data) {
			response.write(data);
			res.end(''); // 不写则没有http协议尾
		}
		optfile.writefile('./views/one.txt', '我的写入文件', recall);
	},
	showImg (request, response) {
		response.writeHead(200, {'Content-Type': 'image/jpeg'});
		optfile.readImg('./imgs/pig.jpg', response);
	}
};