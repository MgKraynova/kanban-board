import { render, screen } from '@testing-library/react';
import { Section } from './section.component';

describe('<Section />', () => {
  it('It renders Section', () => {
    render(<Section title="test-title" />);

    const section = screen.getByTestId('section');

    expect(section).toBeInTheDocument();
  });
});
