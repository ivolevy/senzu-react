// src/App.js
import './index.css';
import { Header } from './components/Header';
import { About } from './components/About';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import ScrollToTopButton from './assets/comps/ScrollTopButton'; 

function App() {
  return (
    <>
      <Header />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
      <ScrollToTopButton />
    </>
  );
}

export default App;
