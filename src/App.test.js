import { render, screen } from '@testing-library/react';
import App from './App';

test('renders w/o crashing', () => {
  render(<App />);
  const linkElement = screen.getByText(/devmegan\/react-template/i);
  expect(linkElement).toBeInTheDocument();
});
