const alphabetWar = (reinforces, airstrikes) => {
    const leftSide = { 'w': 4, 'p': 3, 'b': 2, 's': 1 };
    const rightSide = { 'm': 4, 'q': 3, 'd': 2, 'z': 1 };
    let [leftScore, rightScore] = [0, 0];
    let battlefield = reinforces[0];

    for(i in airstrikes){
        console.log(i);
        
    }

    // let bombs = fight.replace(/[a-z]\*[a-z]/gi, '___')
    //     .replace(/[a-z]\*|\*[a-z]/gi, '__')
    //     .replace(/\*/gi, '_');

    // for (i in bombs) {
    //     if (bombs[i] in leftSide) leftScore += leftSide[bombs[i]];
    //     if (bombs[i] in rightSide) rightScore += rightSide[bombs[i]];
    // }
    // if (leftScore < rightScore) return "Right side wins!";
    // if (leftScore > rightScore) return "Left side wins!";
    // return "Let's fight again!";
}

let reinforces =
    ["g964xxxxxxxx",
        "myjinxin2015",
        "steffenvogel",
        "smile67xxxxx",
        "giacomosorbi",
        "freywarxxxxx",
        "bkaesxxxxxxx",
        "vadimbxxxxxx",
        "zozofouchtra",
        "colbydauphxx"];
let airstrikes =
    ["* *** ** ***",
        " ** * * * **",
        " * *** * ***",
        " **  * * ** ",
        "* ** *   ***",
        "***   ",
        "**",
        "*",
        "*"];

var assert = require('assert');
assert.strictEqual(alphabetWar(reinforces, airstrikes), 'codewarsxxxx', 'Top 50 massacre failure');
assert.strictEqual(alphabetWar(["abcdefg", "hijklmn"], ["   *   ", "*  *   "]), 'hi___fg');
assert.strictEqual(alphabetWar(["aaaaa", "bbbbb", "ccccc", "ddddd"], ["*", " *", "   "]), 'ccbaa');