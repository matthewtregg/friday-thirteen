require('chai').should();

const unluckyDays = require('../index.js');

describe('unluckyDays', function () {

  it('should return 2 when passed "2019"', function () {
    unluckyDays('2019').should.eql(2);
  });

  it('should return 3 when passed "1998"', function () {
    unluckyDays('1998').should.eql(3);
  });

  it('should return 1 when passed "1571"', function () {
    unluckyDays('1571').should.eql(1);
  });

});
