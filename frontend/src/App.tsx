import { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar/index';
import HomeContent from './components/HomeContent/index';
import Footer from './components/Footer/index';

function App() {

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

export default App;
