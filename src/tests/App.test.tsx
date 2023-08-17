import { expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('App.tsx のテスト', () => {
  render(<App />);
  screen.debug();
  expect(screen.queryByText('Vite + React')).toBeInTheDocument();
});
