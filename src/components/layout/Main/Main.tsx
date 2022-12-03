import React, { useEffect } from 'react';
import ReactModal from 'react-modal';
import { Outlet } from 'react-router-dom';

import { s, types } from '.';

import { ModalWindow, NoteForm } from 'components';

const Main = ({ dataTestId }: types.MainProps) => {
  useEffect(() => ReactModal.setAppElement('#root'));
  return (
    <main className={s.main} data-testid={dataTestId}>
      <Outlet />
      <ModalWindow>
        <NoteForm />
      </ModalWindow>
    </main>
  );
};

export default Main;
