const User = require('./User');

class Teacher extends User {
	constructor(id, name, age) {
		// 调用父类的constructor(id, name, age)
		super(id, name, age);
	}
	teach(res) {
		console.log('id: ' + this.id + ', ' + this.name + '讲课');
		res.write('id: ' + this.id + ', ' + this.name + '讲课');
	}
}
module.exports = Teacher;










