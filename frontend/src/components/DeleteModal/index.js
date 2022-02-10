import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import DeleteForm from './DeleteForm';

function DeleteModal(props) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)} className='delete_button'>
        Delete
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <DeleteForm song={props.song}/>
        </Modal>
      )}
    </>
  );
}

export default DeleteModal;
