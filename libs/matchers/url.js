var match = require('./util').match;

module.exports = function(req, value) {
  return match('url', value, req.url);
};
