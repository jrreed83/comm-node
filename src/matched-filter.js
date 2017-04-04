

// Build a symmetric FIR filter
function buildFilter(fn) {

    let f0 = fn.tap(0);
    let n  = (fn.len() - 1)/2;

    function inner(taps,i) {
        if (i > n) {
            return taps;
        } else {
            let fi = fn.tap(i);
            return inner([fi, ...taps, fi],i+1);
        }
    }
    return inner([f0],1);

}

    