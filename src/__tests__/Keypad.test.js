import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Keypad from '../components/Keypad';

beforeEach(() => {
  jest.spyOn(console, 'log').mockImplementation(() => {});
});

afterEach(() => {
  console.log.mockRestore();
});

test('displays an input with the right input type', () => {
  const { container } = render(<Keypad />);
  const input = container.querySelector('input');
  expect(input.type).toBe('password');
});

test('typing in the input triggers console output', () => {
  const { container } = render(<Keypad />);
  const input = container.querySelector('input');
  fireEvent.change(input, { target: { value: '123' } });

  expect(console.log).toHaveBeenCalledWith('Entering password...');
});
