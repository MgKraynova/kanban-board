import { Task, TTask } from 'entities/task';
import { PlusButton } from 'shared/ui/plus-button';
import './styles.css';

type TProps = {
  title: string;
  tasks: TTask[]
};

export const Section = ({ title, tasks }: TProps) => {
  return (
    <div className="section" data-testid="section">
      <div className="header">
        <h2 className="title">{title}</h2>
        <PlusButton />
      </div>
      <div className="tasks">
        {tasks.map(task => <Task key={task.id} title={task.title} />)}
      </div>
    </div>
  );
};
