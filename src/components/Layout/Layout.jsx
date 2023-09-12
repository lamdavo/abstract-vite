import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';

import './Layout.scss';

const Layout = () => {
  return (
    <div className='layout'>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Layout;
