import { render, screen } from '@testing-library/react';
import Web from './Web';  // Import the correct component

test('renders DEV@Deakin header', () => {
  render(<Web />);
  const headerElement = screen.getByText(/DEV@Deakin/i);  // Look for actual content in your UI
  expect(headerElement).toBeInTheDocument();
});
