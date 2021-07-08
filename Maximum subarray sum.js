const maxSequence = arr => {
    if (!Array.isArray(arr) || !arr.length) return 0;
    if (arr.every(x => x >= 1)) return arr.reduce((x, y) => x + y);

    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        let tempSum = arr[i];
        let tempMax = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            tempSum += arr[j];
            if (tempSum > tempMax) tempMax = tempSum;
        }
        if (tempMax > max) max = tempMax;
    }
    return max;
}