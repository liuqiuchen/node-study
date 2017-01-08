const optfile = require('./modules/optfile');
const url = require('url');
const querystring = require('querystring'); // post需导入

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
		// get方式接收参数
		/*const rdata = url.parse(req.url, true).query;
		console.log(rdata);

		if(rdata['email'] != undefined) console.log(rdata['email']);
		if(rdata['pwd'] != undefined) console.log(rdata['pwd']);*/

		// post方式接收参数
		let post = '';	// 定义了一个post变量，用于暂存请求体的信息
		// 通过req的data事件监听函数，每当接收到请求体的数据，就累加到post变量中
		req.on('data', (chunk) => {
			post += chunk;
		});
		// 注意异步
		req.on('end', () => {
			post = querystring.parse(post);	// 在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回
			//console.log('email: ' + post['email'] + '\n');
			//console.log('pwd: ' + post['pwd']);
			let arr = ['email', 'pwd'];
			let recall = (data) => {
				let dataStr = data.toString();
				for(var i = 0;i < arr.length;i++) {
					let re = new RegExp('{' + arr[i] + '}', 'g');
					dataStr = dataStr.replace(re, post[arr[i]]);
				}
				res.write(dataStr);
				res.end('');	// 不写则没有http协议尾
			};
			optfile.readfile('./views/login.html', recall);
		});
		/*let data = optfile.readfileSync('./views/login.html', getRecall(req, res));
		res.write(data);
		res.end();*/
	},
	zhuce(req, res) {
		optfile.readfile('./views/zhuce.html', getRecall(req, res));
	},
	onewritefile (request, response) {
		function recall (data) {
			response.write(data);
			res.end(''); // 不写则没有http协议尾
		}
		optfile.writefile('./views/one.txt', '我的写入文件', recall);
	},
	showimg (request, response) {
		response.writeHead(200, {'Content-Type': 'image/jpeg'});
		optfile.readImg('./imgs/pic.jpg', response);
	}
};