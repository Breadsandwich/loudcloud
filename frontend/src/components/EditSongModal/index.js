import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Modal } from '../../context/Modal';
import EditForm from './EditForm';

function EditFormModal( {song} ) {
  const [showModal, setShowModal] = useState(false);

  console.log('from EditSongModal/index', song)


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
