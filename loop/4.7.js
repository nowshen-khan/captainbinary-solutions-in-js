function countProperties(obj) {
	// Write Your Code

	let count = 0;
	for (let key in obj) {
		if (obj.hasOwnProperty(key)) {
			count++;
		}
	}
	return count;
}
const propertyCount = countProperties({ a: 1, b: 2, c: 3 });
console.log(propertyCount);
