var request = require('superagent');
var expect = require('chai').expect;
var agent = require('superagent-promise')(require('superagent'), Promise);


describe('Async', function() {
  this.timeout(5000);

  it('by done function', function(done){
    request
      .get('https://api.github.com')
      .end(function(err, res){
        expect(res).to.be.an('object');
        done();
      });
  });

  it('by promise', function() {
    return agent.get('https://api.github.com')
      .then(function(res) {
        expect(res).to.be.an('object');
      });
  });
});
