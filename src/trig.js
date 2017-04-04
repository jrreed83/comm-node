function sinc(x) {
    let sx;
    if (x === 0) {
        sx = 1;
    } else {
        sx = Math.sin(Math.PI*x) / (Math.PI*x);
    }
    return sx;
}

module.exports = {
    sinc,
};

