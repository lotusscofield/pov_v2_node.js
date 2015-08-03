var items = [];

function CartItem(barcode, count) {
  this.barcode = barcode;
  this.count = count;
}

// CartItem.setItems = function (itemArr) {
//   items = itemArr;
// };

module.exports = CartItem;
