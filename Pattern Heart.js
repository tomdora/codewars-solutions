const boxes = n => ("█").repeat(n);

const draw = n => {
    if (n < 6 || n % 2 != 0) return -1;
    let heart;
    string = "".concat(
        "◢"
        + boxes((n - 4) / 2)
        + "◣◢"
        + boxes((n - 4) / 2)
        + "◣\n"
        + boxes(n) + "\n"
    );

    let m = n - 2;
    for (let i = 0; i < n / 2; i++) {
        if (i === (n/2) - 1) {
            string = string.concat(
                " ".repeat(i)
                + "◥"
                + boxes(m)
                + "◤"
                + " ".repeat(i)
            );
            break;
        }
        string = string.concat(
            " ".repeat(i)
            + "◥"
            + boxes(m)
            + "◤"
            + " ".repeat(i)
            + "\n"
        );
        m -= 2;
    }

    return string;
}

console.log(draw(6));
console.log(draw(8));
console.log(draw(10));