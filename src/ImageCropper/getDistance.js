function getDistance(x1, y1, x2, y2) {
    const xDistance = x1 - x2;
    const yDistance = y1 - y2;
    const a = Math.pow(xDistance, 2);
    const b = Math.pow(yDistance, 2);
    const c = Math.sqrt(a + b);
    return c;
}

export default getDistance;
