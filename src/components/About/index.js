import './about.scss';

export default function About() {
  return (
    <div className='about-container'>
      <div className='inner-container'>
        <div className='about-txt'>
          <div className='header'>
            <img src={require('../../images/finder.png')} alt='car glass' />
            <span>ABOUT QUICK FIX CAR GLASS</span>
          </div>

          <div className='txt'>
            <h2>Our Low Prices Guaranteed in the Bay Area</h2>
            <p>
              About Us Quickfix Auto glass has more than 7 years of experience
              providing auto glass service to customers just like you each year.
              Our auto glass service uses innovative technology and is built for
              your convenience. We are certified technicians through AGSC. We
              get the job done quickly and provide quality workmanship so you
              can have a peace of mind. When it comes to price, we beat the
              competition and can fix your glass needs today or the next day.
              Our mobile service also allows you to schedule an appointment at a
              time and place that works for you. Most importantly, all of our
              services have a Lifetime Warranty on workmanship.
            </p>
          </div>
        </div>

        <div className='about-imgs'>
          <img
            src='https://images.unsplash.com/photo-1659115904528-8650d05527a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGF1dG8lMjBnbGFzc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
            alt='test'
          />
          <img
            id='img2'
            src='https://cdn.pixabay.com/photo/2016/10/18/09/33/glass-1749697__480.jpg'
            alt='a'
          />
        </div>
      </div>
    </div>
  );
}
