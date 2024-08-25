const getEvenNumbers = require('./getEvenNumbers');

// Test suite for getEvenNumbers function
describe('getEvenNumbers', () => {
  
  // Test : Array with mixed even and odd numbers
  test('returns only even numbers from a mixed array', () => {
    expect(getEvenNumbers([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
  });

  // Test : Array with only even numbers
  test('returns the same array if all numbers are even', () => {
    expect(getEvenNumbers([2, 4, 6, 8, 10])).toEqual([2, 4, 6, 8, 10]);
  });

  // Test : Array with only odd numbers
  test('returns an empty array if all numbers are odd', () => {
    expect(getEvenNumbers([1, 3, 5, 7, 9])).toEqual([]);
  });

  // Test : Array with negative and positive even numbers
  test('returns even numbers including negatives and zero', () => {
    expect(getEvenNumbers([-4, -3, -2, 0, 1, 2])).toEqual([-4, -2, 0, 2]);
  });

  // Test : Empty array
  test('returns an empty array if input is an empty array', () => {
    expect(getEvenNumbers([])).toEqual([]);
  });
});
