const {assert} = require('chai');

const {zeros} = require('../matched-filter');

describe('Array', function() {
  describe('#zeros()', function() {
    it('should return 5 zeros', function() {
      assert.deepEqual([0,0,0,0,0], zeros(5));
    });
  });
});