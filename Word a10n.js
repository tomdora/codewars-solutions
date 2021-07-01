const abbreviate = (string) => {
	let temp = string.split(/([^a-z])/gi);
	let newStr = [];

	for(let i = 0; i < temp.length; i++){
		if(temp[i].match(/[^a-z]/gi)) newStr.push(temp[i]);
		else if(temp[i].length < 4) newStr.push(temp[i]);
		else{
			let len = temp[i].length-2;
			newStr.push(temp[i].charAt(0) + len + temp[i].charAt(len+1));
		}
	}
	return newStr.join('');
}
