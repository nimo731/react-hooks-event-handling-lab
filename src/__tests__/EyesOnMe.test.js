import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import EyesOnMe from '../components/EyesOnMe';

beforeEach(() => {
  jest.spyOn(console, 'log').mockImplementation(() => {});
});

afterEach(() => {
  console.log.mockRestore();
});

test('displays a button with the text "Eyes on me"', () => {
  render(<EyesOnMe />);
  expect(screen.getByText('Eyes on me')).toBeInTheDocument();
});

test('focusing the button triggers console output', () => {
  render(<EyesOnMe />);
  const button = screen.getByText('Eyes on me');
  fireEvent.focus(button);

  expect(console.log).toHaveBeenCalledWith('Good!');
});

test('blurring the button triggers console output', () => {
  render(<EyesOnMe />);
  const button = screen.getByText('Eyes on me');
  fireEvent.blur(button);

  expect(console.log).toHaveBeenCalledWith('Hey! Eyes on me!');
});