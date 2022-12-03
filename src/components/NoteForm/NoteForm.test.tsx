import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';

import NoteForm from '.';

afterEach(cleanup);

describe('NoteForm component', () => {
  it('renders component successfully', () => {
    render(<NoteForm dataTestId='test' />);
    expect(screen.getByTestId(/test/i)).toBeInTheDocument();
  });
});
