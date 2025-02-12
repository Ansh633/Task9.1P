import { render, screen } from '@testing-library/react';
import Web from './Web';
import { Authent } from './Authentication';  // Import AuthProvider

test('renders DEV@Deakin header', () => {
  render(
    <Authent>  {/* Wrap component in AuthProvider */}
      <Web />
    </Authent>
  );
  
  const headerElement = screen.getByText(/DEV@Deakin/i);  
  expect(headerElement).toBeInTheDocument();
});
