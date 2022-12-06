import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';

import NavBar from '.';

afterEach(cleanup);

describe('NavBar component', () => {
  it('renders component successfully', () => {
    render(<NavBar dataTestId='test' />);
    expect(screen.getByTestId(/test/i)).toBeInTheDocument();
  });
});
