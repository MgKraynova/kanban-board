import { render, screen } from '@testing-library/react';
export * from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import { afterEach, vi } from 'vitest';
import { Board } from './board.component';

describe('<Board />', () => {
  vi.mock('react-router-dom');

  afterEach(() => {
    vi.resetAllMocks();
  })

  it('It renders board component', () => {
    vi.mocked(useLoaderData).mockReturnValue({
      newTasks: [],
      finishedTasks: [],
      tasksInProgress: []
    });

    render(<Board />);

    const boardComponent = screen.getByTestId('board');

    expect(boardComponent).toBeInTheDocument();
  });

  it('It renders Section To-do in Board', () => {
    vi.mocked(useLoaderData).mockReturnValue({
      newTasks: [],
      finishedTasks: [],
      tasksInProgress: []
    });

    render(<Board />);

    const sectionTitle = screen.getByText('To-Do');

    expect(sectionTitle).toBeInTheDocument();
  });
});
