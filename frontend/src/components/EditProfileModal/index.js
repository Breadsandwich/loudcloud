import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Modal } from '../../context/Modal';
import match from '../../utils/match';
import EditProfileForm from './EditProfileForm';
import './EditProfile.css'

function EditProfileModal(props) {
    const [showModal, setShowModal] = useState(false);
    const profileUserId = props.profile.userId
    const userId = useSelector(state => state.session.user.id)
    // console.log('from editProfileModal/index', profileUserId)

    const matchingToSessionUser = match(userId, profileUserId)

    return (
      matchingToSessionUser && (
        <>
        <button onClick={() => setShowModal(true)} className='edit_Profile_button'>
          edit
        </button>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <EditProfileForm profile={props.profile} showModal={setShowModal} />
          </Modal>
        )}
      </>
      )
    );
  }

  export default EditProfileModal;
