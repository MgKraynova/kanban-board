import { render, screen } from '@testing-library/react';
import { AddNewSection } from './add-new-section.component';

describe('<AddNewSection />', () => {
  it('It renders AddNewSection', () => {
    render(<AddNewSection />);

    const addSection = screen.getByTestId('add-new-section');

    expect(addSection).toBeInTheDocument();
  });
});
