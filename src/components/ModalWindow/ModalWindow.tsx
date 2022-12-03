import React from 'react';
import ReactModal from 'react-modal';

import { types } from '.';

import { useAppDispatch, useAppSelector } from 'hooks';
import { setModalOpen } from 'store';

const ModalWindow = ({ children }: types.ModalWindowProps) => {
  const { isModalOpen } = useAppSelector((state) => state.app);
  const dispatch = useAppDispatch();
  return (
    <ReactModal
      isOpen={isModalOpen}
      shouldCloseOnOverlayClick
      onRequestClose={() => {
        dispatch(setModalOpen(false));
      }}
      closeTimeoutMS={300}
      style={{
        overlay: {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#0009',
        },
        content: {
          borderRadius: '20px',
          position: 'static',
          padding: '0',
        },
      }}
    >
      {children}
    </ReactModal>
  );
};

export default ModalWindow;
