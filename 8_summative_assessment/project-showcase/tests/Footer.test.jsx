import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../src/components/Footer';

test('renders footer with copyright', () => {
  render(<Footer />);
  const footerText = screen.getByText(/© 2025 Nick Rathbone/i);
  expect(footerText).toBeInTheDocument();
});

export default Footer;