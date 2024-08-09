function sumArrayElements(arr) {
	// Write Your Code
	let sum = 0;
	for (let value of arr) {
		sum += value;
	}
	return sum;
}

const arraySum = sumArrayElements([1, 2, 3, 4, 5]);
console.log(arraySum);
