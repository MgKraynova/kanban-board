import { PlusIcon } from 'shared/ui/plus-icon';
import './styles.css';

export const AddNewSection = () => {
  return (
    <button className="button" data-testid="add-new-section">
      <h2 className="title">Добавить новый раздел</h2>
      <PlusIcon />
    </button>
  );
};
