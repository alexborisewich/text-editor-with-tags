import React, { useEffect } from 'react';
import ReactModal from 'react-modal';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

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
      <ToastContainer
        limit={2}
        position='bottom-right'
        autoClose={2500}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='colored'
      />
    </main>
  );
};

export default Main;
