class User {
	constructor(id, name, age) {
		this.id = id;
		this.name = name;
		this.age = age;
	}
	enter(res) {
		console.log('id: ' + this.id + ', ' + this.name + '进入图书馆');
		res.write('id: ' + this.id + ', ' + this.name + '进入图书馆');
	}
}
module.exports = User;