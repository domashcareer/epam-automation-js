const { describe, it, beforeEach, afterEach } = require('mocha');
const { expect } = require('chai');
const NumbersValidator = require('../../app/numbers-validator');

describe('isAllNumbers', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  describe('positive tests', () => {
    it('should return true if array consists of numbers only', () => {
      const input = [1, 2, 3, 4, 5];
      const result = validator.isAllNumbers(input);

      expect(result).to.be.equal(true);
    });
  });

  describe('negative tests', () => {
    it('should return false if array consists of more than just numbers', () => {
      const input = [1, 2, 3, 4, 'five'];
      const result = validator.isAllNumbers(input);

      expect(result).to.be.equal(false);
    });

    it('should throw an error if something other than an array is provided', () => {
      const input = 'One, Two, Three, Four, Five';

      expect(() => {
        validator.isAllNumbers(input);
      }).to.throw(`[${input}] is not an array`);
    });
  });
});
