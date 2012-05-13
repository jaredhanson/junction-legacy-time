/**
 * Module dependencies.
 */
var legacyTime = require('./middleware/legacyTime')
  , legacyTimeResultParser = require('./middleware/legacyTimeResultParser');

/**
 * Expose middleware.
 */
exports = module.exports = legacyTime;
exports.legacyTime = legacyTime;
exports.legacyTimeResultParser = legacyTimeResultParser;
