const http = require('http');
const events = require('events');
const UserBean = require('./modules/UserBean');

http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    if(request.url !== '/favicon.ico') {
        let user = new UserBean();

        // 注册监听
        user.eventEmit.once('zhuceSuc', (uname, pwd) => {
            response.write('注册成功');
            console.log('传来uname: ' + uname);
            console.log('传来pwd: ' + pwd);
            user.login(request, response);
            response.end('');
        });
        // 注册先被调用了
        user.zhuce(request, response);
    }
}).listen(8000);
console.log('Server running at http://127.0.0.1:8000');









