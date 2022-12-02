import React from 'react';

import { s, types } from '.';

const Header = ({ dataTestId }: types.HeaderProps) => (
  <header className={s.header} data-testid={dataTestId}>
    <span>Header</span>
  </header>
);

export default Header;
