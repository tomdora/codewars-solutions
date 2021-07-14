const alphabetWar = fight => {
    const leftSide = { 'w': 4, 'p': 3, 'b': 2, 's': 1 };
    const rightSide = { 'm': 4, 'q': 3, 'd': 2, 'z': 1 };
    let [leftScore, rightScore] = [0, 0];
    let letters = fight.split('');

    for (let i = 0; i < letters.length; i++) {
        if (letters[i] in leftSide) leftScore += leftSide[letters[i]];
        if (letters[i] in rightSide) rightScore += rightSide[letters[i]];
    }
    if (leftScore < rightScore) return "Right side wins!";
    if (leftScore > rightScore) return "Left side wins!";
    return "Let's fight again!";
}