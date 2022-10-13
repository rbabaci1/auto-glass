import ServiceCard from '../ServiceCard';
import './services.scss';

export default function GlassServices() {
  return (
    <div className='services-container'>
      <div className='heading'>
        <h2>QUICK FIX SERVICES</h2>
        <span />
      </div>

      <ServiceCard />
    </div>
  );
}
