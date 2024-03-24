import './styles.css';
import { Task } from '../../components/task/task.component';
import { PlusButton } from '../../shared/ui/plus-button';

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
        <Task title="something blalalallalal lallalalalallalalalal blalalallalallall alalalallalalalal blalalallal allallalalalallalalalal blalala llalallallalal alallalalalal blalalallalallallala lalallalalalal" />
      </div>
    </div>
  );
};
