function findFirstEvenNumber(arr) {
	// Write Your Code
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 == 0) {
			console.log(arr[i]);
			break;
		}
	}
}
findFirstEvenNumber([1, 2, 5, 8]);
