// Write your code here

async function fetchData() {
	const url = "https://jsonplaceholder.typicode.com/todos/1";
	const response = await fetch(url);
	const data = await response.json();
	return data;
}
