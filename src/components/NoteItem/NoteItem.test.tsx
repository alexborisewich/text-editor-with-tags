import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';

import NoteItem from '.';

afterEach(cleanup);

describe('NoteItem component', () => {
  it('renders component successfully', () => {
    render(<NoteItem note='test' dataTestId='test' />);
    expect(screen.getByTestId(/test/i)).toBeInTheDocument();
  });
});
