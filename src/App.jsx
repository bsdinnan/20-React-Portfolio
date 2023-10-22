import { Outlet } from 'react-router-dom';
import Nav from './components/navigation/Nav';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

function App() {
  return (
    <>
      <Header>
        <Nav />
      </Header>
      <Outlet />
      <Footer />
    </>
  );
};

export default App;