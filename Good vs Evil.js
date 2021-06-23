const goodVsEvil = (good, evil) => {
    const goodScalar = [1, 2, 3, 3, 4, 10];
    const evilScalar = [1, 2, 2, 2, 3, 5, 10];
    good = good.split(" ");
    evil = evil.split(" ");

    let goodScore = 0;
    for (let i = 0; i < good.length; i++) { goodScore += (good[i] * goodScalar[i]); }

    let evilScore = 0;
    for (let i = 0; i < evil.length; i++) { evilScore += (evil[i] * evilScalar[i]); }

    if (goodScore > evilScore) { return "Battle Result: Good triumphs over Evil"; }
    if (goodScore < evilScore) { return "Battle Result: Evil eradicates all trace of Good"; }
    return "Battle Result: No victor on this battle field";
}