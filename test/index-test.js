var vows = require('vows');
var assert = require('assert');
var legacyTime = require('index');


vows.describe('junction-legacy-time').addBatch({
  
  'module': {
    'should export middleware': function () {
      assert.isFunction(legacyTime);
      assert.isFunction(legacyTime.legacyTime);
      assert.isFunction(legacyTime.legacyTimeResultParser);
    },
  },
  
}).export(module);
