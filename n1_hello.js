const http = require('http');

// 启动一个http服务器
http.createServer((request, response) => {
	// 编写响应头
	response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
	if(request.url !== "/favicon.ico") { // 清除第二次访问
		// 向dos输出
		console.log('访问');
		// 向网页输出
		response.write('hello, world');
		// 结束访问，浏览器不加载了，也能在网页上输出（也可以不输出）
		response.end('你好，再见');
	}
	
// 监听8000端口
}).listen(8000);
console.log('Server running at http://127.0.0.1:8000/');







