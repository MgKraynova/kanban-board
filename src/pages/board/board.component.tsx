import './styles.css';
import { Section } from '../../modules/section/section.component';
import { AddNewSection } from 'features/add-new-section';

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
