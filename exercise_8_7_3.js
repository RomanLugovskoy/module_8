'use strict'
const users = [
    { name: 'Алексей', age: 47, },
    { name: 'Борис', age: 55, },
	{ name: 'Абдулло', age: 17, },
    { name: 'Марина', age: 16, },
	{ name: 'Александра', age: 28, },
    { name: 'Вова', age: 100, }
];
const adultUsers = users.filter(user => user['age'] >= 18);
const userNames = users.map(user => user['name']);
console.log(adultUsers);
console.log(userNames);