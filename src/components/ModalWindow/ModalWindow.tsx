import React from 'react';
import ReactModal from 'react-modal';

import { types } from '.';
import './ModalWindow.scss';

import { useAppDispatch, useAppSelector } from 'hooks';
import { setModalOpen } from 'store';

const ModalWindow = ({ dataTestId, children }: types.ModalWindowProps) => {
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
      contentLabel='Add new note'
      shouldCloseOnEsc
      shouldFocusAfterRender
      shouldReturnFocusAfterClose
      testId={dataTestId}
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
          padding: '20px',
        },
      }}
    >
      {children}
    </ReactModal>
  );
};

export default ModalWindow;
