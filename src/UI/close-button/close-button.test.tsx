import { render, screen } from '@testing-library/react';
import { CloseButton } from './close-button.component';

describe('<CloseButton />', () => {
  it('It renders CloseButton', () => {
    render(<CloseButton />);

    const closeButton = screen.getByTestId('close-button');

    expect(closeButton).toBeInTheDocument();
  });
});
