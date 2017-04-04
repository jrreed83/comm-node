const {sinc} = require('./trig');

function rrcosine(params) {
    let {sampsPerSymbol, rollOff} = params;

    function tap(i) {
        let xi;
        if (i === (sampsPerSymbol / (4*rollOff))) {
            sin = Math.sin(Math.PI/(4*rollOff));
            cos = Math.cos(Math.PI/(4*rollOff));
            xi = (rollOff/Math.sqrt(2)) * ( sin * (1+(2/Math.PI))  +  cos * (1-(2/Math.PI)));
        } else {
            let ii  = i / sampsPerSymbol;
            sin = Math.sin(Math.PI*ii*(1-rollOff));
            cos = Math.cos(Math.PI*ii*(1+rollOff));
            xi = (sin + (4 * rollOff * ii * cos)) / (Math.PI*ii*(1 - Math.pow(4*rollOff*ii,2)));         
        }
        return xi;
    }

    return tap;
}

module.exports = {
    rrcosine,
};