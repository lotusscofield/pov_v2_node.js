var CartItem = require('../cart-item.js');

function Scaner() {}

Scaner.prototype.scan = function (inputs) {
  inputs.forEach(function (val) {
    var obeject = {
      barcode: val.splice('-')[0] || val,
      count: val.splice('-')[1] || 1
    };
    new CartItem(obeject.barcode, obeject.count);
  });

  var collection = [];
  return collection.push(obeject);
};

module.exports = Scaner;
