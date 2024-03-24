import 'src/features/add-new-section/styles.css';
import { PlusIcon } from 'src/shared/ui/plus-icon';

export const AddNewSection = () => {
  return (
    <button className="button" data-testid="add-new-section">
      <h2 className="title">Добавить новый раздел</h2>
      <PlusIcon />
    </button>
  );
};
