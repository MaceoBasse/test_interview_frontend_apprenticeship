import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('renders counter and buttons', () => {
  render(<Counter />);
  expect(screen.getByText(/Count: 0/i)).toBeInTheDocument();
  expect(screen.getByText('Increment')).toBeInTheDocument();
  expect(screen.getByText('Decrement')).toBeInTheDocument();
});

test('increments count when increment button is clicked', () => {
  render(<Counter />);
  fireEvent.click(screen.getByText('Increment'));
  expect(screen.getByText(/Count: 1/i)).toBeInTheDocument();
});

test('decrements count when decrement button is clicked', () => {
  render(<Counter />);
  fireEvent.click(screen.getByText('Decrement'));
  expect(screen.getByText(/Count: -1/i)).toBeInTheDocument();
});