import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Modal, Button } from 'antd';
import { StrictMode, useEffect, useState } from 'react';


const ModalCheckImport = (props) => {
  const { confirm } = Modal;
  useEffect(() => {
    showConfirm(); 
  },[confirm])


  function showConfirm() {
    confirm({
      title: 'Do you Want to Import this File?',
      icon: <ExclamationCircleOutlined />,
      content: props.nameFile,
      onOk() {
        setTimeout(() => {
          return new Promise((resolve, reject) => {
            setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
            console.log("A");
          }).catch(() => console.log('Oops errors!'));
        }, 2000);
        props.setToggleModal(false)
        props.deleteFile()
      },
      onCancel() {
        props.setToggleModal(false)
        props.deleteFile()
      },
    });
  }
  return (
    <StrictMode>
    </StrictMode>
  );
};

export default ModalCheckImport;