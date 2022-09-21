import './header.scss';

export default function Header() {
  return (
    <div className='header-wrapper'>
      <div className='covid-alert'>
        Local auto glass shops facing glass shortage.{' '}
        <a
          href='https://www.ksby.com/news/local-news/local-auto-glass-shops-facing-glass-shortage'
          rel='noreferrer'
          target='_blank'
        >
          Learn more
        </a>
      </div>

      <div className='navigation' role='navigation' aria-label='main'>
        <img
          src={require('../../images/logo-no-background.png')}
          alt=' SVG as logo'
        />
        <div className='site-nav-container'>
          <a href='http://localhost:3000/'>HOME</a>
          <a href='http://localhost:3000/'>ABOUT US</a>
          <a href='http://localhost:3000/'>PRICE</a>
          <a href='http://localhost:3000/'>CONTACT US</a>
        </div>
      </div>
    </div>
  );
}
