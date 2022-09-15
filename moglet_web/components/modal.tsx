import { Dialog } from "@headlessui/react";
import styles from "../styles/service/common.module.css"

export function Modal({ onClose = () => {}, isOpen, children }) {

  return (
    <Dialog
      static
      open={isOpen}
      onClose={onClose}
      className={styles.modal}
    >
      <Dialog.Panel>
        {children}
      </Dialog.Panel>
    </Dialog>
  );
}