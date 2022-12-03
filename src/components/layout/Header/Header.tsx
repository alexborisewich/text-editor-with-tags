import React from 'react';

import { s, types } from '.';

import { Button, Logo, NavBar } from 'components';
import { useAppDispatch } from 'hooks';
import { setModalOpen } from 'store';

const Header = ({ dataTestId }: types.HeaderProps) => {
  const dispatch = useAppDispatch();
  return (
    <header className={s.header} data-testid={dataTestId}>
      <div className={s.container}>
        <Logo />
        <NavBar />
        <Button text='Add new note' onClick={() => dispatch(setModalOpen(true))} />
      </div>
    </header>
  );
};

export default Header;
