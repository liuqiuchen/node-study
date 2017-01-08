var async = require('async');

function exec() {
	async.waterfall([ 	// 异步，串行有关联
		function (done) {
			let ii = 0;
			setInterval(function () {
				console.log('aaa=' + new Date());
				ii++;
				if(ii == 3) {
					clearInterval(this);
					done(null, 'one完毕'); // 第一步的回调是第二步的参数
				}
			}, 1000);
			//done(null, 'one完毕');
			//done('出错', 'one完毕');
		},
		function (preValue, done) {
			let ii = 0;
			setInterval(function () {
				console.log(preValue + new Date());
				ii++;
				if(ii == 3) {
					clearInterval(this);
					done(null, preValue + ', two完毕');
				}
			}, 1000);
			//done(null, 'two完毕');
		}
	], function (err, result) { // 就是done
		console.log(err); // null
		console.log(result); // 结果集合

	});
}

exec();

console.log('主进程执行完毕');








