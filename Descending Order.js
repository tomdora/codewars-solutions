function descendingOrder(n){
	return Number(Array.from(n.toString()).sort(function compare(a, b){ return b-a }).join(''));
}
