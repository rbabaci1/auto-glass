import './card.scss';

export default function ServiceCard({ title, img }) {
  return (
    <div className='service-card'>
      <img src={img} alt='a' />

      <h4>{title}</h4>
    </div>
  );
}
