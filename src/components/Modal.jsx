import React, { useState } from 'react';
import ModalButton from './ModalButton';
import styled from 'styled-components';

const Modal = ({ children }) => {

  return (
    <ModalOverlay onClick={(e) => e.stopPropagation()}>
      <ModalContent>
        {children}
        <ModalButton/>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;

// Styled-components
const ModalOverlay = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  width: 300px;
  text-align: center;
`;
