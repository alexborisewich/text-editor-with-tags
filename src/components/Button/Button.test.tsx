import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';

import Button from '.';

afterEach(cleanup);

describe('Button component', () => {
  it('renders component successfully', () => {
    render(<Button dataTestId='test' text='test' />);
    expect(screen.getByTestId(/test/i)).toBeInTheDocument();
  });
});
