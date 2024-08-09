function printNonMultiplesOfFive(n) {
	// Write Your Code
	let i = 1;
	do {
		if (i % 5 !== 0) {
			console.log(i);
		}
		i++;
	} while (i <= n);
}
printNonMultiplesOfFive(10);
