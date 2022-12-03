import React from 'react';
import ReactModal from 'react-modal';

import { types } from '.';

const ModalWindow = ({ children }: types.ModalWindowProps) => {
  return (
    <ReactModal
      isOpen={false}
      shouldCloseOnOverlayClick
      onRequestClose={() => {}}
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
