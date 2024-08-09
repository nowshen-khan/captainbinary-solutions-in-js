function printNonMultiplesOfThree(n) {
	// Write Your Code
	for (let i = 1; i <= n; i++) {
		if (i % 3 == 0) {
			continue;
		} else {
			console.log(i);
		}
	}
}

printNonMultiplesOfThree(10);
