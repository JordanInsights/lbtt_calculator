const { 
    expect,
    assert
} = require('chai');
const {
    calculateLbtt,
    calculateBandTax,
    taxGenerator
} = require('../methods.js');


describe('calculateLbtt', function() {
    
    it ('Should throw an error when no value parameter passed', function() {
        expect(calculateLbtt).to.throw('Missing parameters');
    });
    it('Should throw an error when passed an incorrect data type', function() {
        expect(calculateLbtt.bind(null, 'string')).to.throw('Incorrect data type passed');
    });
    it('Should return a number when passed valid parameters', function() {
        expect(calculateLbtt(146000)).to.be.a('number');
    });
    it('Should return 0 when passed less than or equal to 145000', function() {
        const minimum = calculateLbtt(14500)
        const lessThanMin = calculateLbtt(130000)
        expect(minimum).to.equal(0);
        expect(lessThanMin).to.equal(0);
    });
});

describe('calculateBandTax', function() {
    it('Should throw an error when no value or proportion parameters passed', function() {
        expect(calculateBandTax).to.throw('Missing parameters')
    });
    it('Should throw an error when passed an incorrect data type', function() {
        expect(calculateBandTax.bind(null, 'string', 0.5)).to.throw('Incorrect data type passed');
        expect(calculateBandTax.bind(null, 10, {})).to.throw('Incorrect data type passed');
    });
    it('Should return a number when passed valid parameters', function() {
        expect(calculateBandTax(146000, 0.02)).to.be.a('number');
    });
    it('Should return the product of two numbers', function() {
        expect(calculateBandTax(10, 0.5)).to.equal(5);
    })
});

describe('taxGenerator', function() {
    it('Should return a number when passed valid parameters', function() {
        expect(taxGenerator(146000, 0, 0)).to.be.a('number');
    });
    it('Should return 0 when passed <= 145000', function() {
        expect(taxGenerator(145000, 0, 0)).to.equal(0);
    });
    it('Should return 2100 when passed 250000', function() {
        expect(taxGenerator(250000, 0, 0)).to.equal(2100);
    });
    it('Should return 5850 when passed 325000', function() {
        expect(taxGenerator(325000, 0, 0)).to.equal(5850);
    });
})
