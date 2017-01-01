const http = require('http');
const optfile = require('./modules/optfile');

http.createServer((request, response) => {
	/*response.writeHead(200, {'Content-Type': 'text/html;charset=urf-8'});*/
	response.writeHead(200, {'Content-Type': 'image/jpeg'}); // 以二进制流的方式输出
	if(request.url !== '/favicon.ico') { // 清除第二次访问
		console.log('访问');

		let path = './imgs/pic.jpg';
		optfile.readImg(path, response);

		console.log('继续执行');
	}
}).listen(8000);
console.log('server running at 8000');