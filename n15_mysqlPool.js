// 调用连接池类
const OptPool = require('./modules/OptPool');

let optPool = new OptPool();
let pool = optPool.getPool();

// 从连接池中获取一个连接
pool.getConnection((err, conn) => {
    if(err) {
        console.log('获取失败：' + err);
    } else {
        // 插入
        let userAddSql = 'insert into user (uname, pwd) values(?,?)';
        let param = ['eee', 'lll'];
        conn.query(userAddSql, param, (err, result) => {
            if(err) {
                console.log('insert err: ', err.message);
                return;
            }
            console.log('insert success: ' + result);
            // 放回连接池
            //conn.release();
        });
        // 查询
        conn.query('SELECT * from user', (err, result) => {
            if(err) {
                console.log('查询失败：' + result);
            }
            for(let i = 0;i < result.length;i++) {
                console.log(result[i]);
            }
            // 放回连接池
            conn.release();
        });
    }

});










