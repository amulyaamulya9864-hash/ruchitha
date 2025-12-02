import Hero from './components/Hero';
import About from './components/About';
import Collection from './components/Collection';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <Collection />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
