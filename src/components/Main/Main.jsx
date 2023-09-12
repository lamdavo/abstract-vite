import './Main.scss';
import Card from '../Card/Card';

const Main = () => {
  const data = [
    {
      id: 1,
      img: 'https://res.cloudinary.com/doizpp8s5/image/upload/v1672955307/abstract/abstract1_t6q6fw.png',
      title: 'Using Abstract',
      desc: 'Abstract lets you manage, version, and document your designs in one place.',
      url: '',
    },
    {
      id: 2,
      img: 'https://res.cloudinary.com/doizpp8s5/image/upload/v1672955307/abstract/abstract2_j7nuk9.png',
      title: 'Manage your account',
      desc: 'Configure your account settings, such as your email, profile details, and password.',
      url: '',
    },
    {
      id: 3,
      img: 'https://res.cloudinary.com/doizpp8s5/image/upload/v1672955310/abstract/abstract3_k3ifzt.png',
      title: 'Manage teams and projects',
      desc: 'Configure your account settings, such as your email, profile details, and password.',
      url: '',
    },

    {
      id: 4,
      img: 'https://res.cloudinary.com/doizpp8s5/image/upload/v1672955310/abstract/abstact4_t8sh1x.png',
      title: 'Manage billing',
      desc: 'Change subscriptions and payment details.',
      url: '',
    },

    {
      id: 5,
      img: 'https://res.cloudinary.com/doizpp8s5/image/upload/v1672955310/abstract/abstract5_vbxhom.png',
      title: 'Auth',
      desc: 'Get in touch with a human.',
      url: '',
    },
    {
      id: 6,
      img: 'https://res.cloudinary.com/doizpp8s5/image/upload/v1672955311/abstract/abstract6_omr1ah.png',
      title: 'Abstract support',
      desc: 'Get in touch with a human.',
      url: '',
    },
  ];

  return (
    <div className='main main__container'>
      <section className='hero-unit hero-unit--large container'>
        <div className='container-inner hero-unit__content'>
          <div className='hero-unit__title text-center'>How can we help?</div>
          <form
            role='search'
            className='search-box search-box--hero-unit'
            data-search=''
            data-instant='true'
            autoComplete='off'
            action=''
            acceptCharset='UTF-8'
            method='get'
          >
            <input name='utf8' type='hidden' value='✓' autoComplete='off' />
            <input
              type='search'
              name='query'
              id='query'
              placeholder='Search'
              autoComplete='off'
            />
            <input type='submit' name='commit' value='Search'></input>
          </form>
          <svg
            className='arrow-svg'
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
          >
            <path d='M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z' />
          </svg>
        </div>
      </section>
      <div className='container'>
        <div className='container-inner home'>
          <div className='category-list' id='category-list'>
            <div className='category-list-items'>
              {data.map((item) => (
                <Card key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
