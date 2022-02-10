import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Modal } from '../../context/Modal';
import EditForm from './EditForm';

function EditFormModal(props) {
  const [showModal, setShowModal] = useState(false);

  console.log('from EditSongModal/index', props.song)


  return (
    <>
      <button onClick={() => setShowModal(true)} className='edit_button'>
        edit
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditForm song={props.song}/>
        </Modal>
      )}
    </>
  );
}

export default EditFormModal;
