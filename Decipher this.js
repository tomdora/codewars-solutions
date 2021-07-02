const decipherThis = (str) => {
	let splitStr = str.split(' ');
	let newStr = [];

	for(let i = 0; i < splitStr.length; i++){
		let temp = splitStr[i].split(/([0-9]+)/);
		if(temp[2].length > 3){
			newStr.push(String.fromCharCode(temp[1]) + 
				temp[2].charAt(temp[2].length-1) + 
				temp[2].substring(1, temp[2].length-1) + 
				temp[2].charAt(0));
		}
		else if(temp[2].length === 3){
			newStr.push(String.fromCharCode(temp[1]) +
				temp[2].charAt(2) + 
				temp[2].charAt(1) +
				temp[2].charAt(0));
		}
		else{
			newStr.push(String.fromCharCode(temp[1]) +
				temp[2].charAt(1) +
				temp[2].charAt(0));
		}
	}
	return newStr.join(' ');	
}
