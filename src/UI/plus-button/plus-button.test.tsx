import { render, screen } from '@testing-library/react';
import { PlusButton } from './plus-button.component';

describe('<PlusButton />', () => {
  it('It renders PlusButton', () => {
    render(<PlusButton />);

    const button = screen.getByTestId('plus-button');

    expect(button).toBeInTheDocument();
  });
});
