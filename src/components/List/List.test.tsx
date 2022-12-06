import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';

import List from '.';

afterEach(cleanup);

describe('NoteList component', () => {
  it('renders component successfully', () => {
    render(<List type='notes' data={['test']} dataTestId='test' />);
    expect(screen.getByTestId(/test/i)).toBeInTheDocument();
  });
});
