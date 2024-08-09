// Write your code here
const addThreeNumbers = (num1, num2, num3 = 0) => {
	return num1 + num2 + num3;
};
const result = addThreeNumbers(5, 10, 15);
console.log(result);
const resultWithDefault = addThreeNumbers(5, 10);
console.log(resultWithDefault);
