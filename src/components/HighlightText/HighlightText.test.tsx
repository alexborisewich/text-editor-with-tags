import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';

import HighlightText from '.';

afterEach(cleanup);

describe('HighlightText component', () => {
  it('renders component successfully', () => {
    render(<HighlightText text='test' tags={['test']} dataTestId='test' />);
    expect(screen.getByTestId(/test/i)).toBeInTheDocument();
  });
});
