var CartItem = require('../models/cart-item.js');

describe("CartItem", function() {

  describe("contribute", function() {
    it("CartItem has barcode and count as a charicterastic.", function() {
      var theCartItem = new CartItem("001", 2);
      expect(theCartItem.barcode).toBe("001");
      expect(theCartItem.count).toBe(2);
    });
  });

  describe("getPrice", function() {
    it("Should return correct price", function() {
      var theCartItem = new CartItem("ITEM001", 3);
      var items = [
        {barcode:"ITEM001", price:10},
        {barcode:"ITEM002", price:20},
      ];
      expect(theCartItem.getPrice()).toBe(10);
    });
  });


});
