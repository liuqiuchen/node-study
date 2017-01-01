const http = require('http');
const url = require('url');
const router = require('./router');

http.createServer((request, response) => {
	response.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
	if(request.url !== '/favicon.ico') { // 清除第2次访问
		//optfile.readfileSync('./views/login.html');
		/*
		const recall = (data) => {
			response.write(data);
			response.end('ok');
		};

		optfile.readfile('./views/login.html', recall);
		*/
		let pathname = url.parse(request.url).pathname;
		response.write(pathname);
		pathname = pathname.replace('/', ''); // 替换掉前面的 /
		console.log(pathname);
		router[pathname](request, response);

		console.log('主程序执行完毕');
	}
}).listen(8000);
console.log('Server running at http://127.0.0.1:8000/');



