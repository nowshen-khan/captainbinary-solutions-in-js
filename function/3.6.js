// Write your code here
function sumAllNumbers(...numbers) {
	return numbers.reduce((sum, num) => sum + num, 0);
}
const result = sumAllNumbers(1, 2, 3, 4);
console.log(result);

const resultWithSingleValue = sumAllNumbers(5);
console.log(resultWithSingleValue);

const resultWithNoValues = sumAllNumbers();
console.log(resultWithNoValues);
