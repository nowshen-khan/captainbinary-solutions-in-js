function factorial(n) {
	// Write Your Code
	let result = (i = 1);
	while (i <= n) {
		result *= i;
		i++;
	}
	return result;
}
const factResult = factorial(5);

console.log(factResult);
