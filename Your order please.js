const order = words => words.split(' ').sort((a, b) => (a.replace(/\D/g, '') - b.replace(/\D/g, ''))).join(' ');
