const { describe, beforeEach } = require('node:test');
const sum = require('./script');

describe('Sum', () => {
    describe('recived arguments', () => {
        it('negative number', () => {
            const expected = -10;
            let result;
            result = sum(-10);
            expect(result).toBe(-10);
        });
    })
})