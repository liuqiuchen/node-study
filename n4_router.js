const http = require('http');
const url = require('url');
const router = require('./router');

http.createServer((request, response) => {
	// 编写响应头
	response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
	if(request.url !== '/favicon.ico') { 
		let pathname = url.parse(request.url).pathname; // /login
		pathname = pathname.replace('/', '');
		// pathname有漏洞，下几节处理
		console.log(pathname);
		response.write(pathname);
		router[pathname](request, response);
		response.end('');
	}
}).listen(8000);
console.log('Server running at http://127.0.0.1:8000/'); 