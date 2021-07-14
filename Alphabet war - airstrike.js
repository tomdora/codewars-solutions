const alphabetWar = fight => {
    const leftSide = { 'w': 4, 'p': 3, 'b': 2, 's': 1 };
    const rightSide = { 'm': 4, 'q': 3, 'd': 2, 'z': 1 };
    let [leftScore, rightScore] = [0, 0];
    let bombs = fight.replace(/[a-z]\*[a-z]/gi, '___').replace(/[a-z]\*/gi, '__').replace(/\*[a-z]/gi, '__');

    for (i in bombs) {
        if (bombs[i] in leftSide) leftScore += leftSide[bombs[i]];
        if (bombs[i] in rightSide) rightScore += rightSide[bombs[i]];
    }
    if (leftScore < rightScore) return "Right side wins!";
    if (leftScore > rightScore) return "Left side wins!";
    return "Let's fight again!";
}

var assert = require('assert');
assert.strictEqual(alphabetWar("z"), "Right side wins!");
assert.strictEqual(alphabetWar("****"), "Let's fight again!");
assert.strictEqual(alphabetWar("z*dq*mw*pb*s"), "Let's fight again!");
assert.strictEqual(alphabetWar("zdqmwpbs"), "Let's fight again!");
assert.strictEqual(alphabetWar("zz*zzs"), "Right side wins!");
assert.strictEqual(alphabetWar("sz**z**zs"), "Left side wins!");
assert.strictEqual(alphabetWar("z*z*z*zs"), "Left side wins!");
assert.strictEqual(alphabetWar("*wwwwww*z*"), "Left side wins!");
assert.strictEqual(alphabetWar("rl**i*y*phzs"), "Let's fight again!");