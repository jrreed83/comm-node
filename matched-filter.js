const R = require('ramda');

function sinc(x) {
    let sx;
    switch (x) {
        case 0:
            sx = 1;
            break;
        default:
            sx = Math.sin(Math.PI*x) / (Math.PI*x);
    }
    return sx
}


function zeros(n) {
    return R.repeat(0,n);
}

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
    return inner(f0,1);

}
// We are explicitly taking advantage of the fact that the filter
// is symmetric about 0
function raisedCosineFilter(obj) {
    let {sampsPerSymbol, nSymbs, rollOff} = obj;

    function tap(i) {
        let xi;
        if (i === (sampsPerSymbol / (2*rollOff))) {
            xi = Math.PI * sinc(0.5/rollOff);
        } else {
            let ii = i / sampsPerSymbol;
            xi = sinc(ii) * Math.cos(Math.PI * rollOff * ii) / (1 - Math.pow(2.0 * rollOff * ii,2));           
        }
        return xi;
    }

    function len() {
        const n = (nSymbs * sampsPerSymbol) + 1;
        return n;
    };

    return {
        tap,
        len,
    };
} 

module.exports = {
    buildFilter,
    raisedCosineFilter,
};
    