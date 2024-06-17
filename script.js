function firstChar(text) {
  // your code here
	let result=text.trim();
	if (result.length>0) {
		return result.charAt(0);
	}
	return ' ';
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));

