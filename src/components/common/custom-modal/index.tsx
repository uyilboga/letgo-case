import React from 'react';
import { Modal } from 'react-bootstrap';
import { CustomModalTypes } from '@/components/common/custom-modal/CustomModal.types';

const CustomModal = (props: CustomModalTypes) => {
  const { children, show, onHide, onShow, title, scrollable, size, centered = true } = props;

  return (
    <Modal show={show} onHide={onHide} title={title} scrollable={scrollable} size={size} onShow={onShow} centered={centered}>
      {children}
    </Modal>
  );
};

export default CustomModal;
