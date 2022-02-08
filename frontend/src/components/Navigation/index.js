import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import UploadFormModal from '../UploadFormModal';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <UploadFormModal user={sessionUser}/>
        <ProfileButton user={sessionUser} />
      </>
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <SignupFormModal />
      </>
    );
  }

  return (
    <div id='navbar'>
      <button className='logo_btn'>
        <NavLink exact to={'/'}></NavLink>
      <i className="fab fa-soundcloud"></i>
      </button>
    <div id='nav-center'>
    <NavLink exact to="/" className='nav-labels'>LoudCloud</NavLink>
    </div>
    <ul id='nav-right'>
      <li>
        {isLoaded && sessionLinks}
      </li>
    </ul>

    </div>
  );
}

export default Navigation;
