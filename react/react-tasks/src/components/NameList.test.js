import React from 'react';
import { render, screen } from '@testing-library/react';
import NameList from './NameList';

test('renders list of names', () => {
  render(<NameList />);
  expect(screen.getByText('Alice')).toBeInTheDocument();
  expect(screen.getByText('Bob')).toBeInTheDocument();
  expect(screen.getByText('Charlie')).toBeInTheDocument();
  expect(screen.getByText('David')).toBeInTheDocument();
});