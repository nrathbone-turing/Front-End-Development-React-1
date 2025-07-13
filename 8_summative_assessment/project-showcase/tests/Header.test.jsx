import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '../src/components/Header';

test('renders header title', () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );
  
  expect(screen.getByText(/Nick Rathbone/i)).toBeInTheDocument();
});