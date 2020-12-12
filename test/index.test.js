import {jest} from '@jest/globals';
import  addNumber  from '../bin/index';
//import  Calculator  from '../bin/index';
const Calculator = jest.mock('../bin/index');


describe('Calculator Tests for Dojo nr.1', () => {
  
  beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    Calculator.mockClear();
  });

  it('We can check if the consumer called the class constructor', () => {
    const numbers = calc.add(1);
    expect(numbers).toBe(1);
  });

  test('2 + 3 = 5', () => {
    expect(addNumber(2, 3)).toBe(5);
  });
});