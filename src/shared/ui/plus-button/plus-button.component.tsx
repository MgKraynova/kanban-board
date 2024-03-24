import './styles.css';
import { PlusIcon } from '../plus-icon';

export const PlusButton = () => {
  return (
    <button className="plusButton" data-testid="plus-button">
      <PlusIcon />
    </button>
  );
};
