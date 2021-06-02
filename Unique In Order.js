var uniqueInOrder=function(iterable){
	if(!Array.isArray(iterable)){ iterable = iterable.split(''); }

	let i = 0;
	while(i < iterable.length){
		if(iterable[i+1] == [iterable[i]]){ iterable.splice((i+1), 1) }
		else{ i++; }
	}

	return iterable;
}
