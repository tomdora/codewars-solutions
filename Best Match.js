function bestMatch(ALAHLYGoals, zamalekGoals) {
    let [a, z] = [ALAHLYGoals, zamalekGoals];
    if (a.length != z.length) return -1;
    let windex = 0;
    let smallest = -1;

    for (let i = 0; i < a.length; i++) {
        if (a[i] - z[i] < smallest || (a[i] - z[i] === smallest && z[i] > z[windex]) || smallest < 0) {
            windex = i;
            smallest = a[i] - z[i];
        }
    }
    return windex;
}