import { PlusIcon } from '../../../ui/plus-icon/plus-icon.component.tsx';
import './styles.css';

export const PlusButton = () => {
  return (
    <button className="plusButton" data-testid="plus-button">
      <PlusIcon />
    </button>
  );
};
