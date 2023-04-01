import './styles.css';
import { Task } from '../task/task.component';
import { PlusButton } from '../plus-button/plus-button.component';

type TProps = {
  title: string;
};

export const Section = ({ title }: TProps) => {
  return (
    <div className="section" data-testid="section">
      <div className="header">
        <h2 className="title">{title}</h2>
        <PlusButton />
      </div>
      <div className="tasks">
        <Task title="something" />
        <Task title="something" />
        <Task title="something" />
        <Task title="something" />
        <Task title="something" />
        <Task title="something" />
        <Task title="something" />
        <Task title="something" />
        <Task title="something" />
        <Task title="something" />
        <Task title="something" />
        <Task title="something" />
      </div>
    </div>
  );
};
