// src/App.js
import './index.css';
import { Header } from './components/Header';
import { About } from './components/About';
import { Footer } from './components/Footer';
import ScrollToTopButton from './assets/comps/ScrollTopButton'; 

function App() {
  return (
    <>
      <Header />
      <About />
      <Footer />
      <ScrollToTopButton />
    </>
  );
}

export default App;
