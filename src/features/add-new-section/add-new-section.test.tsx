import { render, screen } from '@testing-library/react';
import { AddNewSection } from 'src/features/add-new-section/add-new-section.component.tsx';

describe('<AddNewSection />', () => {
  it('It renders AddNewSection', () => {
    render(<AddNewSection />);

    const addSection = screen.getByTestId('add-new-section');

    expect(addSection).toBeInTheDocument();
  });
});
