

// Build a symmetric FIR filter
function buildFir(fn,nTaps) {

    let n  = (nTaps - 1) / 2;
    let f0 = fn(0);

    function inner(taps,i) {
        if (i > n) {
            return taps;
        } else {
            let fi = fn(i);
            return inner([fi, ...taps, fi],i+1);
        }
    }
    return inner([f0],1);

}


function numTaps(params) {
    let {sampsPerSymbol, nSymbs} = params;
    return (sampsPerSymbol * nSymbs) + 1;
}

module.exports = {
    buildFir,
    numTaps,
};
    