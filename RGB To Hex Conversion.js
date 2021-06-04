const hexVal = x => {
	if(x <= 0){ return "00" }
	else if(x < 10){ return '0' + x }
	else if(x < 16){ return '0' + x.toString(16) }
	else if(x >= 255){ return "FF" }
	else{ return x.toString(16) }
}

const rgb = (r, g, b) => {
	let rgb = [];
	rgb.push(hexVal(r));
	rgb.push(hexVal(g));
	rgb.push(hexVal(b));

	return rgb.join('').toUpperCase();
}
