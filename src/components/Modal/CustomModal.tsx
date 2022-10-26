import { Modal } from 'antd';
import React, { FC } from 'react';
import { IModalProps } from '../../types/modal';

const CustomModal: FC<IModalProps> = (props) => {
  return (
    <Modal
      title={props.title}
      open={props.open}
      onCancel={props.onCancel}
      footer={props.footer}
    >
      {props.children}
    </Modal>
  );
};

export default CustomModal;
