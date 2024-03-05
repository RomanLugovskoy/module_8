'use strict'
function setFullName (fullName) {
	this.fullName = fullName;
}
const person = {
	name: 'Сергей',
	lastName: 'Сергеев',
};
const setPersonFullName = setFullName.bind(person);
setPersonFullName('John Smith');
console.log(person.fullName);