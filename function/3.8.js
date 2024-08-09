// Write your code here
function createCounter() {
	let count = 0;
	return {
		increment: function () {
			count++;
		},
		getValue: function () {
			return count;
		},
	};
}
const counter = createCounter();
counter.increment();
counter.increment();
console.log(counter.getValue());
