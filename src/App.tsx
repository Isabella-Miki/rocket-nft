import Home from './Pages/Home';
import './App.scss'
import About from './Pages/About';
import Popular from './Pages/Popular';
import BestArtists from './Pages/BestArtists';
import Footer from './Pages/Footer';

function App() {
  return (
    <div className='main'>
      <Home />
      <About />
      <Popular />
      <BestArtists />
      <Footer />
    </div>
  );
}

export default App;
