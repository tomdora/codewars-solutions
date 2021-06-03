function isPangram(string){
	const letters = string.toLowerCase().match(/[a-z]/g);
	const alphabet = [...new Set(letters)];
	return alphabet.length === 26;
}
