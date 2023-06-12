import { render, screen } from '@testing-library/react';
import { Task } from './task.component';

describe('<Task />', () => {
  it('It renders Task', () => {
    render(<Task title="some title" />);

    const task = screen.getByTestId('task');

    expect(task).toBeInTheDocument();
  });
});
