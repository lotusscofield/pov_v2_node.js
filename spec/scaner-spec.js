var maintest = require('../test/main-test.js');
var scan = require('../models/scaner.js');

describe('should return correct barcode and count', function() {
  it('scan', function () {
    var collection = sacn(inputs);
    expect(collection).toBe([
      {barcode: 'ITEM000001', count: 1},
      {barcode: 'ITEM000001', count: 1},
      {barcode: 'ITEM000001', count: 1},
      {barcode: 'ITEM000001', count: 1},
      {barcode: 'ITEM000001', count: 1},
      {barcode: 'ITEM000003', count: 2},
      {barcode: 'ITEM000005', count: 1},
      {barcode: 'ITEM000005', count: 1},
      {barcode: 'ITEM000005', count: 1}
    ]);

  });

});
