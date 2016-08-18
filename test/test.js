var chai = require('chai');
var expect = chai.expect;
var should = chai.should();
var results = require('../index.js');



it('should get the latest draw if no drawID is passed in', function (done) {
    this.timeout(15000);

    results({
        type: 'vikinglotto',
    }).then(function (response) {
        response.should.be.json;
        response.should.be.a('array');
        expect(response).to.have.lengthOf(1);
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
        toDrawID: 1055
    }).then(function (response) {
        response.should.be.json;
        response.should.be.a('array');
        expect(response).to.have.lengthOf(6);
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