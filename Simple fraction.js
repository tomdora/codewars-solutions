const gcd = (a, b) => {
    if (!b) return a;

    return gcd(b, a % b);
}

const mixedFraction = s => {
    const [numer, denom] = s.split('/');
    if (denom == 0) throw new Error("ZeroDivisionError");
    const num = Math.floor(Math.abs(numer) / Math.abs(denom));
    const remain = (Math.abs(numer) % Math.abs(denom));
    const common = gcd(remain, Math.abs(denom));

    if (remain === 0 && ((numer < 0 && denom > 0) || (numer > 0 && denom < 0)))
        return "-" + num;

    if (remain === 0)
        return num.toString();

    if (num === 0 && ((numer < 0 && denom > 0) || (numer > 0 && denom < 0)))
        return "-" + remain / common + "/" + Math.abs(denom) / common;

    if (num === 0)
        return remain / common + "/" + Math.abs(denom) / common;

    if ((numer < 0 && denom > 0) || (numer > 0 && denom < 0))
        return "-" + num + " " + remain / common + "/" + Math.abs(denom) / common;

    return num + " " + remain / common + "/" + Math.abs(denom) / common;
}