const http = require('http');
const url = require('url');
const router = require('./router');
const exception = require('./modules/Exception');

http.createServer((request, response) => {
	if(request.url !== '/favicon.ico') {	// 清除第二次访问
		let pathname = url.parse(request.url).pathname;
		pathname = pathname.replace('/', '');	// 替换掉前面的/
		try {
			//router[pathname](request, response);
			data = exception.expfun(0);
			response.write(data);
			response.end();
		} catch (err) { // 捕获throw抛出的异常
			response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
			response.write('错误： ' + err.toString());
			response.end('');
		}
		
	}
}).listen(8000);
console.log('Server running at http://127.0.0.1:8000/');








































