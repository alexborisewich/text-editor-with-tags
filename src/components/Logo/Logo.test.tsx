import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';

import Logo from '.';

afterEach(cleanup);

describe('Logo component', () => {
  it('renders component successfully', () => {
    render(<Logo dataTestId='test' />);
    expect(screen.getByTestId(/test/i)).toBeInTheDocument();
  });
});
