const http = require('http');
// 调用一个其他页面的函数
const otherfuns = require('./modules/otherfuns.js');

http.createServer((request, response) => {
	// 编写响应头
	response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
	if(request.url !== '/favicon.ico') { // 清除第二次访问
		func1(response);
		// 调用一个其他页面的函数
		otherfuns.func2(response);
		otherfuns['func3'](response);
		response.end('');
	}
}).listen(8000);
console.log('Server running at http://127.0.0.1:8000/');

// 调用一个本页面的函数
const func1 = (res) => {
	console.log('func1');
	res.write('你好，我是func1');
};





