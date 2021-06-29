function persistence(num) {
	let times = 0;
	while(num > 9){
		times += 1;
		let x = num.toString().split('');
		num = x.reduce((i,j) => i*j);
	}
	return times;
}
