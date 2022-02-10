import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditForm from './EditForm';

function EditFormModal({ song }) {
  const [showModal, setShowModal] = useState(false);
  const songvalue = Object.values(song)

  // console.log('from edit modal  - #########', song)
  console.log('from edit modal  - #########', songvalue)

  return (
    <>
      <button onClick={() => setShowModal(true)} className='edit_button'>
        edit
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditForm />
        </Modal>
      )}
    </>
  );
}

export default EditFormModal;
