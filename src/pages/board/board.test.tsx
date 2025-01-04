import { render, screen, waitFor } from '@testing-library/react';
import { vi, MockedFunction } from 'vitest';
import { Board } from 'pages/board/board.component.tsx';
import { useTasks } from 'entities/task';

vi.mock('entities/task', async () => {
  const originalModule = await vi.importActual('entities/task');
  return {
    ...originalModule,
    useTasks: vi.fn(),
  };
});

describe('Board', () => {
  it('should render loading state', () => {
    (useTasks as MockedFunction<typeof useTasks>).mockReturnValue({
      data: {
        newTasks: [],
        tasksInProgress: [],
        finishedTasks: [],
      },
      isLoading: true,
      isSuccess: false,
    });

    render(<Board />);

    expect(screen.getByText('Загрузка')).toBeInTheDocument();
  });

  it('should render error state', () => {
    (useTasks as MockedFunction<typeof useTasks>).mockReturnValue({
      data: {
        newTasks: [],
        tasksInProgress: [],
        finishedTasks: [],
      },
      isLoading: false,
      isSuccess: false,
    });

    render(<Board />);

    expect(screen.getByText('Ошибка')).toBeInTheDocument();
  });

  it('should render board with sections when tasks are fetched successfully', async () => {
    const mockData = {
      newTasks: [{ id: '1', title: 'Task 1', status: 'NEW' }],
      tasksInProgress: [{ id: '2', title: 'Task 2', status: 'IN_PROGRESS' }],
      finishedTasks: [{ id: '3', title: 'Task 3', status: 'DONE' }],
    };

    (useTasks as MockedFunction<typeof useTasks>).mockReturnValue({
      data: mockData,
      isLoading: false,
      isSuccess: true,
    });

    render(<Board />);

    await waitFor(() => {
      expect(screen.getByText('To-Do')).toBeInTheDocument();
      expect(screen.getByText('In progress')).toBeInTheDocument();
      expect(screen.getByText('Done')).toBeInTheDocument();
      expect(screen.getByText('Task 1')).toBeInTheDocument();
      expect(screen.getByText('Task 2')).toBeInTheDocument();
      expect(screen.getByText('Task 3')).toBeInTheDocument();
    });
  });
});
