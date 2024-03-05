'use strict'
function uniqueSortedNumbers(arr) {
    const uniqueNumbers = [...new Set(arr)];
    const sortedNumbers = uniqueNumbers.sort((a, b) => a - b);
    return sortedNumbers;
}
const numbers = [1, 1, 2, 4, 5, 3, 5, 1, 8, 8, 9, 6, 7, 0];
const uniqueSorted = uniqueSortedNumbers(numbers);
console.log(uniqueSorted);