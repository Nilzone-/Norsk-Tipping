var chai = require('chai');
var expect = chai.expect;
var should = chai.should();
var results = require('../index.js');



it('should get the latest draw if no range-object or fetchResult-property is passed in', function (done) {
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
        range: {
            fromDrawID: 1050,
            toDrawID: 1055
        }
    }).then(function (response) {
        response.should.be.json;
        response.should.be.a('array');
        expect(response).to.have.lengthOf(6);
        done();
    }).catch(function (err) {
        done(err);
    });
});


it('should list 5 last draws when setting property: fetchResult equal to 5', function (done) {
    this.timeout(15000);

    results({
        type: 'vikinglotto',
        fetchResult: 5
    }).then(function (response) {
        response.should.be.json;
        response.should.be.a('array');
        expect(response).to.have.lengthOf(5);
        done();
    }).catch(function (err) {
        done(err);
    });
});



it('should use the range over fetchResult-property when both is added to the options-object', function (done) {
    this.timeout(15000);

    results({
        type: 'vikinglotto',
        range: {
            fromDrawID: 1052,
            toDrawID: 1053
        },
        fetchResult: 5
    }).then(function (response) {
        response.should.be.json;
        response.should.be.a('array');
        expect(response).to.have.lengthOf(2);
        done();
    }).catch(function (err) {
        done(err);
    });
});



it('should fail if no options-object is passed in', function () {
    this.timeout(15000);

    var fn = function () {
        return results()
            .then(function (response) {

            }).catch(function (err) {

            });
    };

    expect(fn).to.throw(Error);
});