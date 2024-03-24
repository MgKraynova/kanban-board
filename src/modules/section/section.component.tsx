import './styles.css';
import { PlusButton } from 'src/shared/ui/plus-button';
import { Task } from 'entities/task';

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
        <Task
          title="something blalalallalal lallalalalallalalalal blalalallalallall alalalallalalalal blalalallal allallalalalallalalalal blalala llalallallalal alallalalalal blalalallalallallala lalallalalalal" />
      </div>
    </div>
  );
};
