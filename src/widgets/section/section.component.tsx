import { Task, TTodo } from 'entities/task';
import { PlusButton } from 'shared/ui/plus-button';
import './styles.css';

type TProps = {
  title: string;
  todos: TTodo[]
};

export const Section = ({ title, todos }: TProps) => {
  return (
    <div className="section" data-testid="section">
      <div className="header">
        <h2 className="title">{title}</h2>
        <PlusButton />
      </div>
      <div className="tasks">
        {todos.map(tido => <Task key={tido.id} title={tido.title} />)}
      </div>
    </div>
  );
};
