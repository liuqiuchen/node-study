var async = require('async');

/*function oneFun() {
	let ii = 0;
	setInterval(function () {
		console.log('aaa=' + new Date());
		ii++;
		if(ii == 3) {
			clearInterval(this);

		}
	}, 1000);
	console.log('oneFun');
}

function twoFun() {
	let jj = 0;
	setInterval(function () {
		console.log('bbb=' + new Date());
		jj++;
		if(jj == 3) {
			clearInterval(this);
		}
	}, 1000);
	console.log('oneFun执行完毕');
}*/

//oneFun();
//twoFun();

function exec() {
	async.series({ // 异步，串行无关联
		one: function (done) {
			let ii = 0;
			setInterval(function () {
				console.log('aaa=' + new Date());
				ii++;
				if(ii == 3) {
					clearInterval(this);
					done('error', 'one完毕'); // 这个done完成了才能执行two，也就是说aaa全部执行完毕了，才执行bbb
					// error的时候，aaa全部执行完，bbb不执行了
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








