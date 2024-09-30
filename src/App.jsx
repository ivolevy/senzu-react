// src/App.js
import './index.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import ScrollToTopButton from './assets/comps/ScrollTopButton'; 

function App() {
  return (
    <>
      <Header />
      <Footer />
      <ScrollToTopButton />
    </>
  );
}

export default App;
