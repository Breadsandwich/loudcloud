import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import uploadForm from './uploadForm';

function UploadFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)} className='upload-button'>Upload</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <uploadForm />
        </Modal>
      )}
    </>
  );
}

export default UploadFormModal;
