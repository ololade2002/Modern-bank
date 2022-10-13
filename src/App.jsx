
import './App.css'
import Billing from './Component/Billing/Billing';
import Business from './Component/Business/Business';
import Card from './Component/Card/Card';
import Footer from './Component/Footer/Footer';
import Hero from './Component/Hero/Hero';
import Navbar from './Component/Navbar/Navbar';
import Newsletter from './Component/Newsletter/Newsletter';
import Testimonial from './Component/Testimonial/Testimonial';
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {
  Aos.init();


  return (
    <div className="App">
   <Navbar/>
   <Hero/>
   <Business/>
   <Billing/>
   <Card/>
   <Testimonial/>
   <Newsletter/>
   <Footer/>
    </div>
  )
}

export default App
