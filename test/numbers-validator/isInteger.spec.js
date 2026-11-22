const { describe, it, beforeEach, afterEach } = require('mocha');
const { expect } = require('chai');
const NumbersValidator = require('../../app/numbers-validator');

describe('isInteger', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  describe('positive tests', () => {
    it('should return true if value is an integer', () => {
      const input = 1;
      const result = validator.isInteger(input);

      expect(result).to.be.equal(true);
    });
  });

  describe('negative tests', () => {
    it('should return false if value is not an integer', () => {
      const input = 1.1;
      const result = validator.isInteger(input);

      expect(result).to.be.equal(false);
    });

    it('should throw an error if value is not a number', () => {
      const input = 'Number';

      expect(() => {
        validator.isInteger(input);
      }).to.throw(`[${input}] is not a number`);
    });
  });
});
