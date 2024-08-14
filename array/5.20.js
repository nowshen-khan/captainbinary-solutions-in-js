function countOccurrences(array, element) {
	// Write your code here

	return array.reduce((acc, val) => (val === element ? acc + 1 : acc), 0);
}
