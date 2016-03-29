var assert = require('chai').assert;
var calculator = require('../calculator');

describe('getResistorValue', function(){
    it('should return 21KΩ ±1%', function() {
        var returnValue = calculator.getResistorValue(calculator.colors().red, calculator.colors().brown, calculator.colors().orange, calculator.colors().brown);
        assert.equal(returnValue, "21KΩ ±1%");
    });
})

describe('getResistorValue', function(){
    it('should return 0.09Ω ±1%', function() {
        var returnValue = calculator.getResistorValue(calculator.colors().black, calculator.colors().white, calculator.colors().silver, calculator.colors().brown);
        assert.equal(returnValue, "0.09Ω ±1%");
    });
})

describe('getResistorValue', function(){
    it('should return 840MΩ ±0.10%', function() {
        var returnValue = calculator.getResistorValue(calculator.colors().grey, calculator.colors().yellow, calculator.colors().violet, calculator.colors().violet);
        assert.equal(returnValue, "840MΩ ±0.10%");
    });
})