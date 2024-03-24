import './styles.css';
import { PlusIcon } from '../../UI/plus-icon/plus-icon.component';

export const AddNewSection = () => {
  return (
    <button className="button" data-testid="add-new-section">
      <h2 className="title">Добавить новый раздел</h2>
      <PlusIcon />
    </button>
  );
};