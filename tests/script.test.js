const { describe } = require('node:test');
const Student = require('../homework-14 — копия');

describe('Student', () => {
    it('should create a student', () => {
        const expected = {
            name: 'Bob',
            surname: 'Doe',
            birthYear: 2000,
            grades: [1, 2, 3, 4, 5],
            attendance: [],
        };
        const bob = new Student('Bob', 'Doe', 2000, [1, 2, 3, 4, 5]);
        expected(bob).toEqual(expected);
    });
});
