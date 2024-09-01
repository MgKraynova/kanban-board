import './styles.css';
import { useLoaderData } from 'react-router-dom';
import { tasksLoader } from 'pages/board';
import { Section } from 'widgets/section';
import { AddNewSection } from 'features/add-new-section';

export const Board = () => {
  const { newTasks, tasksInProgress, finishedTasks } = useLoaderData() as Awaited<ReturnType<typeof tasksLoader>>;

  return (
    <div data-testid="board" className="board">
      <Section tasks={newTasks} title="To-Do" />
      <Section tasks={tasksInProgress} title="In progress" />
      <Section tasks={finishedTasks} title="Done" />
      <AddNewSection />
    </div>
  );
};
