import './Footer.scss';

const Footer = () => {
  return (
    <div className='footer container'>
      <div className='container-inner footer__inner'>
        <div className='footer-column'>
          <h3 className='footer-title'> Abstract</h3>
          <a href='#'>Start Trial</a>
          <a href='#>'>Pricing</a>
          <a href='#'>Download</a>
        </div>
        <div className='footer-column'>
          <h3 className='footer-title'>Resources</h3>
          <a href='#'>Blog</a>
          <a href='#'>Help Center</a>
          <a href='#'>Release Notes</a>
          <a href='#'>Status</a>
        </div>
        <div className='footer-column'>
          <h3 className='footer-title'>Community</h3>
          <a href='#'>Twitter</a>
          <a href='#'>LinkedIn</a>
          <a href='#'>Facebook</a>
          <a href='#'>Dribbble</a>
          <a href='#'>Podcast</a>
        </div>
        <div className='footer-column'>
          <h3 className='footer-title'>Company</h3>
          <a href='#'>About Us</a>
          <a href='#'>Careers</a>
          <a href='#' id='break'>
            Legal
          </a>

          <strong>Contact Us</strong>
          <a href='mailto:info@abstract42.com'>info@abstract42.com</a>
        </div>
        <div className='footer-column-copyright' id='copyright'>
          <svg
            className='abstract-logo-footer'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 200 51'
            preserveAspectRatio='xMinYMid slice'
          >
            <g className='abstract-logo-mark-footer' fill='#fff'>
              <path d='M25.41 0C5.08 0 0 5.08 0 25.41s5.08 25.41 25.41 25.41 25.41-5.08 25.41-25.41S45.74 0 25.41 0zm-4.17 39.31A9.73 9.73 0 1 1 31 29.58a9.75 9.75 0 0 1-9.76 9.73zm17.67-.4h-4.77V16.67H11.91v-4.76h27z'></path>
              <circle cx='21.24' cy='29.58' r='4.96'></circle>
            </g>
          </svg>
          <p>2022 Demo</p>
          <p>Abstract42</p>
          <p>All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
