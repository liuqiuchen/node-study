const http = require('http');
const User = require('./modules/User');
const Teacher = require('./modules/Teacher');

http.createServer((request, response) => {
	// 编写响应头
	response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
	
	if(request.url !== '/favicon.ico') { // 清除第二次访问
		let user = new User(1, '用户1', 20);
		user.enter(response);
		let teacher = new Teacher(2, '教师1', 35);
		teacher.teach(response);
		
		response.end('');
	}
}).listen(8000);
console.log('Serve running at http://127.0.0.1:8000/');