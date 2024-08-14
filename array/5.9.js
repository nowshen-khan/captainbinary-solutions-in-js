function findTopThreeLargest(array) {
	// Write your code here
	let newArray = array.sort((a, b) => b - a);
	return newArray.slice(0, 3);
}
