// 参数的接收

const http = require('http');
const url = require('url');
const router = require('./router');

http.createServer((request, response) => {
	if(request.url !== '/favicon.ico') {	// 清除第二次访问
		let pathname = url.parse(request.url).pathname;
		pathname = pathname.replace('/', '');	// 替换掉前面的/
		// 异步的要使用try catch防止出错
		try {
			router[pathname](request, response);
		} catch(err) {
			response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
			response.write('错误： ' + err);
			response.end('');
		}
		console.log('server执行完毕');
	}
}).listen(8000);
console.log('Server running at http://127.0.0.1:8000');




