import React from 'react';

import { s, types } from '.';

import { Button, Logo, NavBar } from 'components';

const Header = ({ dataTestId }: types.HeaderProps) => (
  <header className={s.header} data-testid={dataTestId}>
    <div className={s.container}>
      <Logo />
      <NavBar />
      <Button text='Add new note' />
    </div>
  </header>
);

export default Header;
