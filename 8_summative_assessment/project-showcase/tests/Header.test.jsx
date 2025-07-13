// tests/Header.test.jsx
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

test('renders header title', () => {
  render(<Header />);
  expect(screen.getByText(/Nick Rathbone/i)).toBeInTheDocument();
});
