import './styles.css';
import { AddNewSection } from 'features/add-new-section';
import { Section } from 'widgets/section';

export const Board = () => {
  return (
    <div data-testid="board" className="board">
      <Section title="To-Do" />
      <Section title="In progress" />
      <Section title="Done" />
      <AddNewSection />
    </div>
  );
};
