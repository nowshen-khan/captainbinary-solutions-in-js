function averageArray(array) {
	// Write your code here
	let arraySum = array.reduce((acc, val) => acc + val, 0);
	let average = arraySum / array.length;
	return average;
}
