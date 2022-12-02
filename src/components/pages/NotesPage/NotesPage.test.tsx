import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';

import NotesPage from '.';

afterEach(cleanup);

describe('NotesPage component', () => {
  it('renders component successfully', () => {
    render(<NotesPage dataTestId='test' />);
    expect(screen.getByTestId(/test/i)).toBeInTheDocument();
  });
});
