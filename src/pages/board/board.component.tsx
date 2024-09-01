import './styles.css';
import { useLoaderData } from 'react-router-dom';
import { todosLoader } from 'pages/board';
import { Section } from 'widgets/section';
import { AddNewSection } from 'features/add-new-section';

export const Board = () => {
  const { newTodos, doneTodos, todosInProgress } = useLoaderData() as Awaited<ReturnType<typeof todosLoader>>;

  return (
    <div data-testid="board" className="board">
      <Section todos={newTodos} title="To-Do" />
      <Section todos={todosInProgress} title="In progress" />
      <Section todos={doneTodos} title="Done" />
      <AddNewSection />
    </div>
  );
};
