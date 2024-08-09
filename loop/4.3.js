function printEvenNumbers(n) {
	// Write Your Code
	let i = 1;
	while (i <= n) {
		if (i % 2 == 0) {
			console.log(i);
		}
		i++;
	}
}
printEvenNumbers(10);
