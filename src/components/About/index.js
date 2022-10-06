import './about.scss';

export default function About() {
  return (
    <div className='about-container'>
      <div className='inner-container'>
        <div className='about-txt'>
          <h4>ABOUT QUICK FIX CAR GLASS</h4>
        </div>

        <div className='about-imgs'>
          <img
            src='https://images.unsplash.com/photo-1659115904528-8650d05527a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGF1dG8lMjBnbGFzc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
            alt='test'
          />
        </div>
      </div>
    </div>
  );
}
