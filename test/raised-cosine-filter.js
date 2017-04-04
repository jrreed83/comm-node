const {expect} = require('chai');

const {rcosine}          = require('../src/raised-cosine-filter');
const {numTaps,buildFir} = require('../src/fir-builder');

describe('Matched-Filter', function() {
  describe('#raisedCosineFilter()', function() {
    let sampsPerSymbol = 16;
    let rollOff        = 0.5;
    let nSymbs         = 5;

    let obj = { sampsPerSymbol, rollOff, nSymbs };
    
    let fn = rcosine(obj);    
    let n  = numTaps(obj);

    it('0 maps to 1', function() {
      expect(1).to.equal(fn(0));
    });

    it('has correct length', function() {
      let taps = buildFir(fn, n);
      expect(taps.length).to.equal(n);
    })

    it('is symmetric', function() {
      //assert.equal(0,1);
    })
  });
});