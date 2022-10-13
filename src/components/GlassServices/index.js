import ServiceCard from '../ServiceCard';
import './services.scss';

export default function GlassServices() {
  return (
    <div className='services-container'>
      <div className='heading'>
        <h2>QUICK FIX SERVICES</h2>
        <span />
      </div>

      <div className='cards'>
        <ServiceCard
          title='Complete Windshield Replacement'
          img='https://media.istockphoto.com/photos/auto-glass-repair-amp-replacement-picture-id155432177?b=1&k=20&m=155432177&s=170667a&w=0&h=lW8rQEpJOK6pdcEYtOAh7p-mbpEyTXfeZw2JLjIbGxA='
        />
        <ServiceCard
          title='Complete Windshield Replacement'
          img='https://media.istockphoto.com/photos/auto-glass-repair-amp-replacement-picture-id155432177?b=1&k=20&m=155432177&s=170667a&w=0&h=lW8rQEpJOK6pdcEYtOAh7p-mbpEyTXfeZw2JLjIbGxA='
        />
        <ServiceCard
          title='Complete Windshield Replacement'
          img='https://media.istockphoto.com/photos/auto-glass-repair-amp-replacement-picture-id155432177?b=1&k=20&m=155432177&s=170667a&w=0&h=lW8rQEpJOK6pdcEYtOAh7p-mbpEyTXfeZw2JLjIbGxA='
        />
      </div>
    </div>
  );
}
