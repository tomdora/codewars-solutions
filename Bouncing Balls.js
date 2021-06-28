const bouncingBall = (h, bounce, window) => {
    if (h <= 0 || bounce <= 0 || bounce > 1 || window >= h) return -1;
    let sightings = 0;
    while (true) {
        sightings += 1;
        h *= bounce;
        if (h > window) sightings += 1;
        else return sightings;
    }
}