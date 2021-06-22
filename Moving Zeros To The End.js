var moveZeros = function (arr) {
    let numZero = 0;
    let arr2 = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) { numZero += 1; }
        else { arr2.push(arr[i]); }
    }

    for (let i = 0; i < numZero; i++) { arr2.push(0); }

    return arr2;
}