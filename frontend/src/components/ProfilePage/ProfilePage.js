import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProfile } from '../../store/profiles';
import EditProfileModal from '../EditProfileModal';
import { useHistory } from 'react-router-dom';
import './ProfilePage.css'

const ProfilePage = () => {

  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);
  const profileObj = useSelector(state => state.profile)
  const profile = Object.values(profileObj)

  if(!sessionUser) {
    history.push('/')
  }

  let sessionButtons;
  if (sessionUser)
      sessionButtons = profile => {
    return (
      <>
        <EditProfileModal user={sessionUser} profile={profile} />
      </>
    )
  }


  useEffect(() => {
    dispatch(getProfile(id))
  }, [dispatch])

  return (
    <>
    {profile.map(userProfile => (
        <div id='profile_container' key={`profile-${userProfile.id}`}>
          <div id='a'>
            <div className='profile_image'>
              <img src={`${userProfile.profilePicUrl}`} className='profile_pic' />
            </div>
            <div className='username'>
            </div>
          </div>

          <div id='b'>
            <div className='profile_header'>
              <h2 className='profile_label'>my profile</h2>
              <div id='profile_actions'>
                  {sessionUser && sessionButtons(userProfile)}
              </div>
            </div>
            <div className='user_details_box'>
              <h3>Name: {`${userProfile.name}`}</h3>
              <h4>location:</h4>
                <p className='bio_text'>{`${userProfile.location}`}</p>
              <h4>Bio</h4>
              <div className='bio_textbox'>
                <p className='bio_text'>{`${userProfile.bio}`}</p>
              </div>
            </div>
          </div>

          <div id='c'>
            <h2>Recommended Songs</h2>
            <div className='album_container'>
             <div className='album_block1'></div>
             <div className='album_block2'></div>
             <div className='album_block3'></div>
             <div className='album_block4'></div>
             <div className='album_block5'></div>
             <div className='album_block6'></div>
             <div className='album_block7'></div>
            </div>
          </div>
        </div>
    ))}
    </>




  )
}

export default ProfilePage
