import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';

import SearchBar from '.';

afterEach(cleanup);

describe('SearchBar component', () => {
  it('renders component successfully', () => {
    render(<SearchBar dataTestId='test' />);
    expect(screen.getByTestId(/test/i)).toBeInTheDocument();
  });
});
