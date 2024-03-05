'use strict'
function printInfo () {
	console.log(`Name: ${this.name}, Age: ${this.age}`);
}
const person = {
	name: 'Алексей',
	age: 47,
};
printInfo.call(person);