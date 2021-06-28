function race(v1, v2, g) {
    if (v1 >= v2 || v1 <= 0 || v2 <= 0 || g <= 0) return null;
    let time = (g / (v2 - v1)) * 3600;
    return [Math.floor(time / 3600), Math.trunc((time % 3600) / 60), Math.trunc((time % 3600) % 60)];
}