import { useEffect } from 'react';
import HomeContent from '../../components/HomeContent';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

function Home() {

  useEffect(() => {

  }, []);

  return (
    <>
      <Navbar />
      <HomeContent />
      <Footer />
    </>
  );
}

export default Home;
