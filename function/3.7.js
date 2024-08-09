// Write your code here
function findMax(numbers) {
	return Math.max(...numbers);
}
const result = findMax([1, 2, 3, 4, 5]);
console.log(result);
const resultWithNegativeNumbers = findMax([-1, -2, -3, -4, -5]);
console.log(resultWithNegativeNumbers);
