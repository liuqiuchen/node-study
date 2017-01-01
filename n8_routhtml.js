// 改造路由

const http = require('http');
const url = require('url');
const router = require('./router');
http.createServer((request, response) => {
	if(request.url !== './favicon.ico') { // 清除第二次访问
		let pathname = url.parse(request.url).pathname;
		pathname = pathname.replace('/', ''); // 替换掉前面的/
		router[pathname](request, response);
	}
}).listen(8000);
console.log('Server running at http://127.0.0.1:8000/');
