function DNAStrand(dna){
	var replacements = {'A':'T', 'T':'A', 'G':'C', 'C':'G'}

	return dna.replace(/[GCAT]/g, x => replacements[x]);
} 
