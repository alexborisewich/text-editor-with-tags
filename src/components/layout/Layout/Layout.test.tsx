import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';

import Layout from '.';

afterEach(cleanup);

describe('Layout component', () => {
  it('renders component successfully', () => {
    render(<Layout />);
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });
});
