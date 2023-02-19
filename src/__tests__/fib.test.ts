import { expect } from '@jest/globals';
import Fibonacci from '../utils/fibonacci';

test('Fibonacci sequence from 3 to 5', () => {
  expect(Fibonacci(3, 5)).toEqual([3, 5]);
});

test('Fibonacci sequence from 2 to 21', () => {
  expect(Fibonacci(2, 21)).toEqual([2, 3, 5, 8, 13, 21]);
});

test('Fibonacci sequence from 1 to 1', () => {
  expect(Fibonacci(1, 1)).toEqual([1, 1]);
});

test('Fibonacci sequence from 1 to 2', () => {
  expect(Fibonacci(1, 2)).toEqual([1, 1, 2]);
});

test('negative numbers should return error', () => {
  expect(Fibonacci(-1, 5)).toEqual('error');
});
test('zero should return error', () => {
  expect(Fibonacci(0, 5)).toEqual('error');
});
test('zero should return error', () => {
  expect(Fibonacci(5, 0)).toEqual('error');
});
