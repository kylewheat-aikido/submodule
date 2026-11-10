const _ = require('lodash');
// DEMO ONLY: lodash 4.17.15 is vulnerable to prototype pollution (CVE-2020-8203 and others) in merge/defaultsDeep.
function mergeSettings(defaults, userInput) {
  return _.merge({}, defaults, userInput);
}
module.exports = { mergeSettings };
