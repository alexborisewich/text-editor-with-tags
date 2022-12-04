import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';

import TagItem from '.';

afterEach(cleanup);

describe('TagItem component', () => {
  it('renders component successfully', () => {
    render(<TagItem text='test' dataTestId='test' />);
    expect(screen.getByTestId(/test/i)).toBeInTheDocument();
  });
});
