const { describe, it, beforeEach, afterEach } = require('mocha');
const { expect } = require('chai');
const NumbersValidator = require('../../app/numbers-validator');

describe('isNumberEvevn', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  describe('positive tests', () => {
    it('should return true if number is even', () => {
      expect(validator.isNumberEven(4)).to.be.equal(true);
    });
  });

  describe('negative tests', () => {
    it('should return false if number is odd', () => {
      expect(validator.isNumberEven(5)).to.be.equal(false);
    });

    it('should throw an error when provided not a Number value', () => {
      const input = 'six';

      expect(() => {
        validator.isNumberEven(input);
      }).to.throw(`[${input}] is not of type "Number" it is of type "${typeof input}"`);
    });
  });
});
