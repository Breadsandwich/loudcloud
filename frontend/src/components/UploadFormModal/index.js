import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import UploadForm from './uploadForm';

function UploadFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)} className='upload_button'>
      <i className="fas fa-cloud-upload-alt" />
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <UploadForm showModal={setShowModal}/>
        </Modal>
      )}
    </>
  );
}

export default UploadFormModal;
