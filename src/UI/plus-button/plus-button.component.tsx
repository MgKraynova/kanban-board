import { PlusIcon } from '../plus-icon/plus-icon.component';
import './styles.css';

export const PlusButton = () => {
  return (
    <button className="plusButton" data-testid="plus-button">
      <PlusIcon />
    </button>
  );
};
