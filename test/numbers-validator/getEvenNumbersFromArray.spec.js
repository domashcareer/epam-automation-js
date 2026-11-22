const { describe, it, beforeEach, afterEach } = require('mocha');
const { expect } = require('chai');
const NumbersValidator = require('../../app/numbers-validator');

describe('getEvenNumbersFromArray', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  describe('positive tests', () => {
    it('should return an array with only even numbers', () => {
      const input = [1, 2, 3, 4, 5];
      const result = validator.getEvenNumbersFromArray(input);

      expect(result).to.satisfy(items => items.every(item => item % 2 === 0));
    });

    it('should return the same array if all its numbers are even', () => {
      const input = [2, 4];
      const result = validator.getEvenNumbersFromArray(input);

      expect(result).to.be.deep.equal([2, 4]);
    });

    it('should return an empty array if there are no even numbers', () => {
      const input = [1, 3, 5];
      const result = validator.getEvenNumbersFromArray(input);

      expect(result).to.be.deep.equal([]);
    });
  });

  describe('negative tests', () => {
    it('should throw an error if something other than an array is provided', () => {
      const input = 'One, Two, Three, Four, Five';

      expect(() => {
        validator.getEvenNumbersFromArray(input);
      }).to.throw(`[${input}] is not an array of "Numbers"`);
    });

    it('should throw an error if something other than an array of numbers is provided', () => {
      const input = [1, 2, 3, 4, 'five'];

      expect(() => {
        validator.getEvenNumbersFromArray(input);
      }).to.throw(`[${input}] is not an array of "Numbers"`);
    });
  });
});
