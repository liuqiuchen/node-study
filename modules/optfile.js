const fs = require('fs');

module.exports = {
	readfileSync (path) { // 同步读取
		const data = fs.readFileSync(path, 'utf-8');
		console.log(data);
		console.log('同步方法执行完毕');
		return data;
	},
	readfile (path, recall) { // 异步执行
		fs.readFile(path, (err, data) => {
			if (err) {
				console.log(err);
			} else {
				console.log(data.toString());
				recall(data);
			}
		});
		console.log('异步程序执行完毕');
	}
};