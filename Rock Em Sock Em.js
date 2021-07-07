const result = (robots, tactics) => {
    let i = 0;
    let j = 1;
    let x = 0;
    while (true) {
        if (x >= robots[i].tactics.length && x >= robots[j].tactics.length) {
            if (robots[i].health > robots[j].health) return robots[i].name + " has won the fight.";
            if (robots[i].health < robots[j].health) return robots[j].name + " has won the fight.";
            return "The fight was a draw.";
        }

        let damage = 0;
        for (const [key, value] of Object.entries(tactics)) {
            if (robots[i].tactics[x] === key) {
                damage = value;
                //console.log(`${robots[i].name} uses ${key} to deal ${damage} damage!`);
                break;
            }
        }

        robots[j].health -= damage;
        //console.log(`${robots[j].name} has ${robots[j].health} left! \n`);
        if (robots[j].health <= 0) {
            return robots[i].name + " has won the fight.";
        }

        if (i === 0) {
            i++;
            j--;
        }
        else {
            i = 0;
            j = 1;
            x++;
        }
    }
}

const fight = (robot1, robot2, tactics) => {
    if (robot1.speed >= robot2.speed) return result([robot1, robot2], tactics);
    if (robot1.speed < robot2.speed) return result([robot2, robot1], tactics);
}