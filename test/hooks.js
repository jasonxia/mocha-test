var expect = require('chai').expect

describe('hooks', function() {
  before(function() {
    console.log('Before function');
  })

  it('test 1', function() {
    expect(1+1).to.be.equal(2);
  })

  it('test 2', function() {
    expect(1+2).to.be.equal(3);
  })

  after(function() {
    console.log('After function');
  })

  beforeEach(function() {
    console.log('Before each test function');
  })

  afterEach(function() {
    console.log('After each test function');
  })

})
