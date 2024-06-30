import './styles.css';
import { PlusIcon } from 'shared/ui/plus-icon';

export const PlusButton = () => {
  return (
    <button type="button" className="plusButton" data-testid="plus-button">
      <PlusIcon />
    </button>
  );
};
