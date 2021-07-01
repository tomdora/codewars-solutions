const multiplicationTable = size => {
    let table = [];
    for(let i = 1; i <= size; i++){
        table[i-1] = [];
            for(let j = 1; j <= size; j++){
            table[i-1].push(i*j);
        }
    }
    return table;
}
