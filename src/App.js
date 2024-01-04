import About from './components/About';
import AllInOne from './components/AllInOne';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar'
import Pricing from './components/Pricing';
import Support from './components/Support'
import ContactForm from './components/ContactForm';
import { Element } from 'react-scroll';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Support />
      <AllInOne />
      <Pricing />
      <Element name="contact">
        <ContactForm />
      </Element>
      <Footer />
    </>
  );
}

export default App;
