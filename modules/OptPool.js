// mysql连接池
let mysql = require('mysql');

class OptPool {
    constructor() {
        this.flag = true;   // 是否连接过
        this.pool = mysql.createPool({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'test',
            port: '3306'
        });
    }
    getPool () {
        if(this.flag) {
            // 监听connection事件
            this.pool.on('connection', (connection) => {
               connection.query('SET SESSION auto_increment_increment=1');
               this.flag = false;
            });
        }
        return this.pool;
    }
}
module.exports = OptPool;
































