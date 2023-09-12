import './Card.scss';

const Card = ({ item }) => {
  return (
    <div className='category-list-item'>
      <div className='category-list-icon'>
        <img src={item.img} alt='' className='category-list-sgv-icon' />
      </div>
      <div className='category-list-block'>
        <div className='category-list-item__content'>
          <h2>{item.title}</h2>
          <p>{item.desc}</p>
          <a className='category-list-link' href={item.url}>
            Learn More →
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
