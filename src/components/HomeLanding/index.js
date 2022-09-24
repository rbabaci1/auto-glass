import Carousel from 'react-bootstrap/Carousel';
import './landing.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function HomeLanding() {
  return (
    <div className='container'>
      <Carousel>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://images.unsplash.com/photo-1651084296894-105edab05b26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXV0byUyMGdsYXNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
            alt='First slide'
          />
          <Carousel.Caption>
            <h3>Quick fix car galass</h3>
            <p>We don't just say low prices, we aimt to live them.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='https://images.unsplash.com/photo-1651084296928-93292998d0af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YXV0byUyMGdsYXNzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
            alt='Second slide'
          />

          <Carousel.Caption>
            <h3>Free mobile service.</h3>
            <p>We come to you, so you don't get distracted.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      );
    </div>
  );
}
