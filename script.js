function firstChar(text) {
  // your code here
	for (let i = 0; i < text.length; i++) {
        // Check if the current character is not a space
        if (text[i] !== ' ') {
            return text[i];
        }
    }
    // Return an empty string if no non-space character is found
    return '';

}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));

