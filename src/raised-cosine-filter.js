const {sinc} = require('./trig.js')

function rcosine(params) {
    let {sampsPerSymbol, nSymbs, rollOff} = params;

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

    return tap;
} 

module.exports = {
    rcosine,
};