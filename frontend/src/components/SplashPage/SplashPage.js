import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../store/session'
import './SplashPage.css'

const SplashPage = ({isLoaded}) => {
  const [credential, setCredentail] = useState('');
  const [password, setPassword] = useState('')
  const dispatch = useDispatch();

  const demoLogin = e => {
    e.preventDefault();
    return dispatch(login({ credential: 'Demo-Disco-User', password:'password' }))
  }

    return (
      <>
        <div id="content-container">
          <h1 className='splash_txt'>Discover more with LoudCloud</h1>
          <p className='splash_txt'>LoudCloud lets you listen, ad-free, to your favorite songs!</p>
          <button className='demo-btn' type='submit' onClick={demoLogin}>Try Demo</button>
        </div>

        <footer id="footer-bar">

          <div className='footer_element'>
            <a href="https://github.com/Breadsandwich" className='about_txt' target='_blank'>
              <h4 className='about_txt'>LoudCloud By: Daniel Thai</h4>
            </a>
          </div>

          <div className='technologies'>
            <div>JavaScript</div>
            <div>PostgreSQL</div>
            <div>Express</div>
            <div>React</div>
            <div>Redux</div>
            <div>Node.js</div>
            <div>Sequelize</div>
            <div>HTML</div>
            <div>CSS</div>
          </div>
        </footer>
      </>
    )
}

export default SplashPage;
