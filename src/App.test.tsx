import App from "./App";
import { render, screen, userEvent } from './utils/test-utils';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByRole('heading')).toBeInTheDocument('React + Vite');
  });
});