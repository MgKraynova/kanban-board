import './styles.css';
import { Section } from 'widgets/section';
import { AddNewSection } from 'features/add-new-section';
import { useTasks } from 'entities/task';

export const Board = () => {
  const { data, isLoading, isSuccess } = useTasks();

  if (isLoading) {
    return 'Загрузка';
  }

  if (isSuccess) {
    const { newTasks, tasksInProgress, finishedTasks } = data;

    return (
      <div data-testid="board" className="board">
        <Section tasks={newTasks} title="To-Do" />
        <Section tasks={tasksInProgress} title="In progress" />
        <Section tasks={finishedTasks} title="Done" />
        <AddNewSection />
      </div>
    );
  }

  return 'Ошибка';
};
