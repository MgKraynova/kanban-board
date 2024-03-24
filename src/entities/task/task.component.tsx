import './styles.css';
import { CloseButton } from 'src/shared/ui/close-button';

type TProps = {
  title: string;
};

export const Task = ({ title }: TProps) => {
  return (
    <div className="task" data-testid="task">
      <h3 className="taskTitle">{title}</h3>
      <CloseButton />
    </div>
  );
};
