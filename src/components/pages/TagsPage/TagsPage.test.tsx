import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';

import TagsPage from '.';

afterEach(cleanup);

describe('TagsPage component', () => {
  it('renders component successfully', () => {
    render(<TagsPage dataTestId='test' />);
    expect(screen.getByTestId(/test/i)).toBeInTheDocument();
  });
});
