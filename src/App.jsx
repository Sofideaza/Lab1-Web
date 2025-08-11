import Navbar from './components/Navbar';
import HeroBanner from './components/HeroBanner';
import PromoGrid from './components/PromoGrid';
import Disclaimer from './components/Disclaimer';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroBanner />
      <PromoGrid />
      <Disclaimer />
      <Footer />
    </div>
  );
}

export default App;