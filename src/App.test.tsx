import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('lemonbase clone', () => {
  render(<App />);
  const textElement = screen.getByText(/lemonbase clone/i);
  expect(textElement).toBeInTheDocument();
});
