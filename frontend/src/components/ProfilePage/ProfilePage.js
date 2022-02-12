import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { getProfile } from '../../store/profiles';
import EditProfileModal from '../EditProfileModal';
import './ProfilePage.css'

const ProfilePage = () => {

  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);

  const profileObj = useSelector(state => state.profile)
  const profile = Object.values(profileObj)

  let sessionButtons;
  if (sessionUser)
      sessionButtons = profile => {
    return (
      <>
        <EditProfileModal user={sessionUser} profile={profile} />
      </>
    )
  }


  // console.log('from ProfilePage:', sessionUser.username)


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
            <h2 className='profile_label'>my profile</h2>
            <div className='user_details_box'>
              <h3>Hello I'm {`${userProfile.name}`}</h3>
              <h4>location</h4>
                <p className='bio_text'>I'm from {`${userProfile.location}`}</p>
              <h4>Bio</h4>
                <p className='bio_text'>{`${userProfile.bio}`}</p>
            </div>
            <div id='profile_actions'>
                {sessionUser && sessionButtons(userProfile)}
            </div>
          </div>
        </div>
    ))}
    </>




  )
}

export default ProfilePage
