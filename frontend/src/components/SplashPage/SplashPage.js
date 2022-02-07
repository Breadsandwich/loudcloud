import './SplashPage.css'

const SplashPage = ({isLoaded}) => {
    return (
      <>
        <div id="content-container">
          <h1 className='splash_txt'>Discover more with LoudCloud</h1>
          <p>LoudCloud lets you listen, ad-free, to your favorite songs!</p>
          <button className='demo-btn'>Try Demo</button>
        </div>

        <footer id="footer-bar">
          <a href="https://github.com/Breadsandwich" className="footer-links" target='_blank'>Github</a>
          <a href="https://www.linkedin.com/in/daniel--thai/" className='footer-links' target='_blank'>Linkedin</a>
        </footer>
      </>
    )
}

export default SplashPage;
