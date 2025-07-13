import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../src/components/Header';

test('renders header title', () => {
  render(<Header />);
  expect(screen.getByText(/Nick Rathbone/i)).toBeInTheDocument();
});
