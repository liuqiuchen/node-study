// 用户操作
const events = require('events');

class UserBean {
    constructor () {
        this.eventEmit = new events.EventEmitter();
        this.zhuce = (req, res) => {
            console.log('注册');
            req['uname'] = 'asina';
            req['pwd'] = '123456';
            // 抛出事件消息
            this.eventEmit.emit('zhuceSuc', 'asina', '123456');
            res.end('');
        };
        this.login = (req, res) => {
            console.log('登录');
            res.write('用户名：' + req['uname']);
            res.write('密码：' + req['pwd']);
            res.write('登录');
        };
    }

}
module.exports = UserBean;


























