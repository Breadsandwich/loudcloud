import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getProfile } from '../../store/profiles';
import './ProfilePage.css'

const ProfilePage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);
  // const currentUserProfile = useSelector(state => state.profile)
  // console.log('from ProfilePage:', )

  return (
    <div id='profile_container'>
        <div id='a'>

          <div className='profile_image'>
            image
          </div>

          <div className='username'>
            <h2>username</h2>
          </div>

        </div>

        <div id='b'>
          <h2 className='profile_label'>my profile</h2>
          <div className='user_details_box'>
            <h3>name</h3>
            <p>location</p>
            <p>biooooooooooooooooooooooooooo</p>
          </div>
        </div>


    </div>
  )
}

export default ProfilePage
