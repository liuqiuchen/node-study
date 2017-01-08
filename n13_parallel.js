var async = require('async');

function exec() {
	async.parallel({ // 异步，并行无关联
		one: function (done) {
			let ii = 0;
			setInterval(function () {
				console.log('aaa=' + new Date());
				ii++;
				if(ii == 3) {
					clearInterval(this);
					done(null, 'one完毕');	// 最后两个done都打印出来
					// done('error', 'one完毕'); // 只打印one完毕
				}
			}, 1000);
			//done(null, 'one完毕');
			//done('出错', 'one完毕');
		},
		two: function (done) {
			let ii = 0;
			setInterval(function () {
				console.log('bbb=' + new Date());
				ii++;
				if(ii == 3) {
					clearInterval(this);
					done(null, 'two完毕');
				}
			}, 1000);
			//done(null, 'two完毕');
		}
	}, function (err, result) { // 就是done
		console.log(err); // null
		console.log(result); // 结果集合

	});
}

exec();

console.log('主进程执行完毕');

























