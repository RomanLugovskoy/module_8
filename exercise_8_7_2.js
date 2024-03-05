'use strict'
function calculate (a, b, operator) {
	switch (operator) {
		case '+':
			return a + b;
		case '-':
			return a - b;
		case '*':
			return a * b;
		case '/':
			return a / b;
		default:
			return NaN;
	}
}
const args = [2, 3, '+'];
const result = calculate.apply(null, args);
console.log(result);