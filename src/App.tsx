import React from 'react';
import Home from './Pages/Home';
import './App.scss'
import About from './Pages/About';
import Popular from './Pages/Popular';
import BestArtists from './Pages/BestArtists';

function App() {
  return (
    <div className='main'>
      <Home />
      <About />
      <Popular />
      <BestArtists />
    </div>
  );
}

export default App;
