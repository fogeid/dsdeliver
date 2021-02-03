import { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar/index';
import HomeContent from './components/HomeContent/index';

function App() {

  useEffect(() => {

  }, []);

  return (
    <>
      <Navbar />
      <HomeContent />
    </>
  );
}

export default App;
