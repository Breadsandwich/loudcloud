import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Modal } from '../../context/Modal';
import match from '../../utils/match';
import EditForm from './EditForm';

function EditFormModal(props) {
  const [showModal, setShowModal] = useState(false);
  const songUserId = props.song.userId
  const userId = useSelector(state => state.session.user.id)

  // console.log('userId from EditModal/index', userId)
  // console.log('songUserId from editModal/index', songUserId)
  // // console.log('from EditSongModal/index', props.song)
  const matchingToSessionUser = match(userId, songUserId)

  return (
    matchingToSessionUser && (
      <>
      <button onClick={() => setShowModal(true)} className='button2'>
        edit
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditForm song={props.song} showModal={setShowModal}/>
        </Modal>
      )}
    </>
    )
  );
}

export default EditFormModal;
