 function findOdd(A) {
	A.sort();

	var i = 0;
	var count = 1;
	while(i < A.length){
		if(A[i+1] === A[i]){ count += 1 }
		
		if(A[i+1] !== A[i]){
			if(count % 2 === 1){ return A[i] }
			count = 1;
		}
		
		i++;
	}

	return 0;
}
