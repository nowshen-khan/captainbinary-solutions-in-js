let password = "yourpassword";
if (password.length >= 12) {
	console.log("Strong password");
} else if (password.length >= 8 && password.length < 12) {
	console.log("Moderate password");
} else {
	console.log("Weak password");
}
