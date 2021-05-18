import React from "react";
import { BG, Modal, Close } from "./styles";

const ModalComponent = ({ toggleModal, children }) => (
  <>
    <BG onClick={toggleModal} />
    <Modal>
      <Close onClick={toggleModal} />
      {children}
    </Modal>
  </>
);

export default ModalComponent;
