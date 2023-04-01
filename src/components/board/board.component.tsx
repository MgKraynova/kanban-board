import './styles.css';
import { Section } from '../section/section.component';
import { AddNewSection } from '../add-new-section/add-new-section.component';

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
