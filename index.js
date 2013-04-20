var nwlnr = require('nwlnr')
  , loopr = require('loopr');

module.exports = function strpr(input) {
  return loopr(nwlnr(input), [], function(index, value, output) {
    output.push(value.trim());
  });
};
