import { useState } from 'react';
import logo from '../images/nav-logo.png';
import AnimatedMenuIcon from './NavIcon';

const DaisyNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar nav bg-szGreen text-szText">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" aria-label="Toggle Menu" className="lg:hidden" onClick={toggleMenu}>
            <AnimatedMenuIcon isOpen={menuOpen} />
          </div>

          {/* Dropdown menu controlado */}
          {menuOpen && (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li><a href="#">Nosotros</a></li>
              <li><a href="#">Que hacemos</a></li>              
              <li><a href="#">Creaciones</a></li>
              <li><a href="#">Hablemos</a></li>
            </ul>
          )}
        </div>
        <img src={logo} alt="Logo" className="logo" />
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
              <li><a href="#">Nosotros</a></li>
              <li><a href="#">Que hacemos</a></li>              
              <li><a href="#">Creaciones</a></li>
              <li><a href="#">Hablemos</a></li>
        </ul>
      </div>

      <div className="navbar-end">
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <button className="btn button" onClick={()=>document.getElementById('my_modal_3').showModal()}>Hablemos!</button>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box !bg-szBeige">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn-sm btn-circle btn-ghost absolute right-2 top-2 text-2xl">✕</button>
            </form>
            <h3 className="font-bold text-lg">Form de contacto</h3>
          </div>
        </dialog>
      </div>
    </nav>
  );
};

export default DaisyNav;

export const CustomNav = () => {
  return (
    <>
      <DaisyNav />
    </>
  );
};
