import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MenuSection from './components/MenuSection'
import Testimonials from './components/Testimonials'
import Location from './components/Location'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <MenuSection />
      <Testimonials />
      <Location />
      <Footer />
    </div>
  )
}

export default App