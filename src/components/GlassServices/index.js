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
          title='Big Rigs / RV / Trucks and Vans'
          img='https://media.istockphoto.com/photos/glazier-using-tools-repairing-to-fix-crack-broken-windshield-on-the-picture-id806662286?b=1&k=20&m=806662286&s=170667a&w=0&h=rf9gJ2Bw3iz23oAtrylzrgkIEa3bo2f7LshanafL_fQ='
        />
        <ServiceCard
          title='Regulator Replacement'
          img='https://media.istockphoto.com/photos/luxury-car-at-public-dealership-picture-id165653253?b=1&k=20&m=165653253&s=170667a&w=0&h=WpYJaySRn3CMCgVlETTDlazxX_j3G6_fRP5tmZt8jN8='
        />
      </div>
    </div>
  );
}
