import { render, screen } from '@testing-library/react';
import App from './app';

describe('<App />', () => {
  it('It renders App component', () => {
    render(<App />);

    const app = screen.getByTestId('app');

    expect(app).toBeInTheDocument();
  });
});
