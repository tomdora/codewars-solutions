const humanReadable = seconds => {
	let hrs = Math.trunc(seconds / 3600);
	let min = Math.trunc((seconds % 3600) / 60);
	let sec = ((seconds % 3600) % 60);

	if(hrs < 10){ hrs = '0' + hrs }
	if(min < 10){ min = '0' + min }
	if(sec < 10){ sec = '0' + sec }

	return hrs + ':' + min + ':' + sec;
}
