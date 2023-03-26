import { render, screen } from '@testing-library/react';
import { PlusIcon } from './plus-icon.component';

describe('<PlusIcon />', () => {
  it('It renders plus icon', () => {
    render(<PlusIcon />);

    const icon = screen.getByTestId('plus-icon');

    expect(icon).toBeInTheDocument();
  });
});
