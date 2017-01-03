// 操作文件模块

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
				recall('文件不存在');
			} else {
				console.log(data.toString());
				recall(data);
			}
		});
		console.log('异步程序执行完毕');
	},
	writefile (path, data, recall) { // 异步方式
		fs.writeFile(path, data, (err) => {
			if (err) {
				throw err;
			}
			console.log('It\'s saved'); // 文件被保存
			recall('写文件成功');
		});
	},
	writeFileSync (path, data) { // 同步方式
		fs.writeFileSync(path, data);
		console.log('同步写文件完成');
	},
	readImg (path, res) {
		fs.readFile(path, 'binary', (err, filedata) => {
			if(err) {
				console.log(err);
				return;
			} else {
				console.log('输出文件');
				// 向客户端输出
				res.write(filedata, 'binary');
				res.end();
			}
		})
	}
};