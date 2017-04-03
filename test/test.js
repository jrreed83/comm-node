const {assert} = require('chai');

const {buildFilter, raisedCosineFilter} = require('../matched-filter');

describe('Matched-Filter', function() {
  describe('#raisedCosineFilter()', function() {
    let sampsPerSymbol = 16;
    let rollOff        = 0.5;
    let nSymbs         = 5;
    let obj = {
      sampsPerSymbol,
      rollOff,
      nSymbs
    };
    
    let filter = raisedCosineFilter(obj);    

    it('0 maps to 1', function() {
      assert.equal(1, filter.tap(0));
    });
    it('length', function() {
      assert.equal(81, filter.len())
    })
  });
});