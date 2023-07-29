import { render, screen } from '@testing-library/react';
import { Board } from './board.component';

describe('<Board />', () => {
  it('It renders board component', () => {
    render(<Board />);

    const boardComponent = screen.getByTestId('board');

    expect(boardComponent).toBeInTheDocument();
  });

  it('It renders Section To-do in Board', () => {
    render(<Board />);

    const sectionTitle = screen.getByText('To-Do');

    expect(sectionTitle).toBeInTheDocument();
  });
});
