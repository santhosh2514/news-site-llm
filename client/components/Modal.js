// components/Modal.js
import React from 'react';
import styles from './Modal.module.css';

const Modal = ({ isOpen, onClose, content }) => {
    if (!isOpen) return null;

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={e => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}>X</button>
                <div className={styles.modalContent}>
                    {content}
                </div>
            </div>
        </div>
    );
};

export default Modal;
