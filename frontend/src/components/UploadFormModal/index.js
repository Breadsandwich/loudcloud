import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import UploadForm from './uploadForm';

function UploadFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)} className='upload-button'>Upload</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <UploadForm />
        </Modal>
      )}
    </>
  );
}

export default UploadFormModal;
