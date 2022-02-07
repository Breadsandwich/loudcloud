import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
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
      <NavLink exact to='/' id='nav-logo'>LoudCloud</NavLink>
    <ul id='nav-left'>
      <li>
        <NavLink exact to="/" className='nav-labels'>Home</NavLink>
      </li>
    </ul>
    <ul id='nav-right'>
      <li>
        {isLoaded && sessionLinks}
      </li>
    </ul>

    </div>
  );
}

export default Navigation;
