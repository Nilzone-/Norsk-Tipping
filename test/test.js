var chai = require('chai');
var expect = chai.expect;
var results = require('../index.js');
var should = chai.should();



it('should get the latest draw if no drawID is passed in', function (done) {
    this.timeout(15000);

    results({
        type: 'vikinglotto',
    }).then(function (response) {
        done();
    }).catch(function (err) {
        done(err);
    });
});


it('should list all results between two drawID\'s', function (done) {
    this.timeout(15000);

    results({
        type: 'vikinglotto',
        fromDrawID: 1050,
        toDrawID: 1052
    }).then(function (response) {
        done();
    }).catch(function (err) {
        done(err);
    });
});


it('should fail if no object is passed in', function () {
    this.timeout(15000);

    var fn = function () {
        return results()
            .then(function (response) {
                
            }).catch(function (err) {

            });
    };
    
    expect(fn).to.throw(Error);
});