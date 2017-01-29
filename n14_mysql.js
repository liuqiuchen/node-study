const mysql = require('mysql');

// 创建一个connection对象
let connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'test',
	port: '3306'
});
// 创建一个连接
connection.connect((err) => {
	if(err) {
		console.log('[query] - :' + err);
		return;
	}
	console.log('[connection connect] succeed!');
});

// 插入
// ? 是占位
let userAddSql = 'insert into user (uname, pwd) values (?,?)';
let param = ['bbb', 'bbb'];
connection.query(userAddSql, param, (err, result) => {
	if(err) {
		console.log('insert err: ', err.message);
		return;
	}
	console.log('insert success');
});

// 执行查询
//执行查询  
connection.query('SELECT * from user', (err, rs) => {  
    if (err) {  
        console.log('[query] - :'+err);  
        return;  
    } 
    for(var i=0;i<rs.length;i++){
        console.log('The solution is: ', rs[i].uname); 
    }
}); 

// 关闭connection
connection.end((err) => {
	if(err) {
		console.log(err.toString());
		return;
	}
	console.log('[connection end] succeed!');
});



