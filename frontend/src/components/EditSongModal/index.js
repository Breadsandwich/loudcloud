import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Modal } from '../../context/Modal';
import EditForm from './EditForm';

function EditFormModal( {songObj} ) {
  const [showModal, setShowModal] = useState(false);

  // console.log('from EditSongModal/index', songObj)


  return (
    <>
      <button onClick={() => setShowModal(true)} className='edit_button'>
        edit
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditForm songObj={songObj}/>
        </Modal>
      )}
    </>
  );
}

export default EditFormModal;
