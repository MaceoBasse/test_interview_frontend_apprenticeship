import React from 'react';
import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

test('renders greeting with name', () => {
  render(<Greeting name="Alice" />);
  const greetingElement = screen.getByText(/Hello, Alice!/i);
  expect(greetingElement).toBeInTheDocument();
});