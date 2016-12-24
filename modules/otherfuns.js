/*
const func2 = (res) => {
	console.log('我是func2');
	res.write('你好，我是腐女');
}
module.exports = func2; // 仅支持一个函数
*/

// 支持多个函数
module.exports = {
	func2 (res) {
		console.log('我是func2');
		res.write('你好，我是func2');
	},
	func3 (res) {
		console.log('我是func3');
		res.write('你好，我是func3');	
	}
};





