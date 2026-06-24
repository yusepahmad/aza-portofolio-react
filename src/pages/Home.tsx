import Orbs from '../components/Orbs';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import About from '../components/About';
import Stack from '../components/Stack';
import Work from '../components/Work';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Orbs />
      <Nav />
      <Hero />
      <About />
      <hr className="sep" />
      <Stack />
      <hr className="sep" />
      <Work />
      <hr className="sep" />
      <Projects />
      <hr className="sep" />
      <Contact />
      <Footer />
    </>
  );
}
