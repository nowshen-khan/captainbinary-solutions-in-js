function printObjectProperties(obj) {
	// Write Your Code
	for (let key in obj) {
		if (obj.hasOwnProperty(key)) {
			console.log(`${key}: ${obj[key]}`);
		}
	}
}
const obj = { name: "John", age: 30, city: "New York" };
printObjectProperties(obj);
