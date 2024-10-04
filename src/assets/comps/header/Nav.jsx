import { useState } from 'react';
import logo from '../../images/logos/sz-bg.png';
import AnimatedMenuIcon from './NavIcon';

const DaisyNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSmoothScroll = (event) => {
    event.preventDefault(); 
    const targetId = event.currentTarget.getAttribute('href');
    const targetElement = document.querySelector(targetId); 

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }

    setMenuOpen(false);
  };

  return (
    <nav className="navbar nav bg-szGreen text-szText">
      <div className="navbar-start">
        <div className="dropdown">
          <div 
            tabIndex={0} 
            role="button" 
            aria-label="Toggle Menu" 
            className="lg:hidden" 
            onClick={toggleMenu}
          >
            <AnimatedMenuIcon isOpen={menuOpen} />
          </div>

          {/* Dropdown menu controlado */}
          {menuOpen && (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-szBeige text-szGreen rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li><a href="#about" onClick={handleSmoothScroll}>Nosotros</a></li>
              <li><a href="#services" onClick={handleSmoothScroll}>Qué hacemos</a></li>              
              <li><a href="#projects" onClick={handleSmoothScroll}>Creaciones</a></li>
              <li><a href="#contact" onClick={handleSmoothScroll}>Hablemos</a></li>
            </ul>
          )}
        </div>
        <a href="#header" onClick={handleSmoothScroll}><img src={logo} alt="Logo" className="logo" /></a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a href="#about" onClick={handleSmoothScroll}>Nosotros</a></li>
          <li><a href="#services" onClick={handleSmoothScroll}>Qué hacemos</a></li>              
          <li><a href="#projects" onClick={handleSmoothScroll}>Creaciones</a></li>
          <li><a href="#contact" onClick={handleSmoothScroll}>Hablemos</a></li>
        </ul>
      </div>

      <div className="navbar-end">
        <button 
          className="btn button" 
          onClick={() => document.getElementById('my_modal_3').showModal()}
        >
          Hablemos!
        </button>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box !bg-szBeige">
            <form method="dialog">
              <button className="btn-sm btn-circle absolute right-2 top-2 text-2xl">✕</button>
            </form>
            <h3 className="font-bold text-lg">Form de contacto</h3>
          </div>
        </dialog>
      </div>
    </nav>
  );
};

export const CustomNav = () => {
  return (
    <>
      <DaisyNav />
    </>
  );
};
