var expect = require("chai").expect

describe('Array', function() {
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function() {
      expect([1,2,3].indexOf(5)).to.be.equal(-1);
    })
  })
})

describe('Expect examples', function() {
  it('shows the expect usages', function() {
    // equal
    expect(4 + 5).to.be.equal(9);
    expect(4 + 5).to.be.not.equal(10);
    expect('hello').to.equal('hello');
    expect(42).to.equal(42);
    expect(1).to.not.equal(true);
    expect({ foo: 'bar' }).to.not.equal({ foo: 'bar' });
    expect({ foo: 'bar' }).to.deep.equal({ foo: 'bar' });

    // above
    expect(10).to.be.above(5);
    expect('foo').to.have.length.above(2);
    expect([ 1, 2, 3 ]).to.have.length.above(2);

    // Boolean (Implicity)
    expect('everthing').to.be.ok;
    expect(1).to.be.ok;
    expect(false).to.not.be.ok;
    expect(undefined).to.not.be.ok;
    expect(null).to.not.be.ok; 

    // true/false
    expect(true).to.be.true;
    expect(1).to.not.be.true;
    expect(false).to.be.false;
    expect(0).to.not.be.false;

    // null/undefined
    expect(null).to.be.null;
    expect(undefined).not.to.be.null;
    expect(undefined).to.be.undefined;
    expect(null).to.not.be.undefined;


    // NaN
    expect('foo').to.be.NaN;
    expect(4).not.to.be.NaN;

    // Type
    expect('test').to.be.a('string');
    expect({ foo: 'bar' }).to.be.an('object');
    expect(null).to.be.a('null');
    expect(undefined).to.be.an('undefined');
    expect(new Error).to.be.an('error');

    // Include/Contain
    expect([1,2,3]).to.include(2);
    expect('foobar').to.contain('foo');
    expect({ foo: 'bar', hello: 'universe' }).to.include.keys('foo');

    // Empty
    expect([]).to.be.empty;
    expect('').to.be.empty;
    expect({}).to.be.empty;

    // match
    expect('foobar').to.match(/^foo/);

    // exist
    var foo = 'hi' , bar = null, baz;
    expect(foo).to.exist;
    expect(bar).to.not.exist;
    expect(baz).to.not.exist;

    // within
    expect(7).to.be.within(5,10);
    expect('foo').to.have.length.within(2,4);
    expect([ 1, 2, 3 ]).to.have.length.within(2,4);

    // instanceOf
    var Tea = function (name) { this.name = name; } , Chai = new Tea('chai');
    expect(Chai).to.be.an.instanceof(Tea);
    expect([ 1, 2, 3 ]).to.be.instanceof(Array); 

    // property(name, [value])
    // simple referencing
    var obj = { foo: 'bar' };
    expect(obj).to.have.property('foo');
    expect(obj).to.have.property('foo', 'bar');// Same as expect(obj).to.contains.keys('foo')

    // deep referencing
    var deepObj = {
      green: { tea: 'matcha' },
      teas: [ 'chai', 'matcha', { tea: 'konacha' } ]
    };
    expect(deepObj).to.have.deep.property('green.tea', 'matcha');
    expect(deepObj).to.have.deep.property('teas[1]', 'matcha');
    expect(deepObj).to.have.deep.property('teas[2].tea', 'konacha'); 

    // ownproperty
    expect('test').to.have.ownProperty('length'); 

    // throw
    var err = new ReferenceError('This is a bad function.');
    var fn = function () { throw err; }  
    expect(fn).to.throw(ReferenceError);
    expect(fn).to.throw(Error);
    expect(fn).to.throw(/bad function/);
    expect(fn).to.not.throw('good function');
    expect(fn).to.throw(ReferenceError, /bad function/);
    expect(fn).to.throw(err);
    expect(fn).to.not.throw(new RangeError('Out of range.'));

    // satisfy(method)
    expect(1).to.satisfy(function(num) { return num > 0; });
  })
})

