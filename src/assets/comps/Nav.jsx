import { useState } from 'react';
import logo from '../images/nav-logo.png';
import AnimatedMenuIcon from './NavIcon';

const DaisyNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Alternar entre abierto/cerrado
  };

  return (
    <div className="navbar nav bg-szGreen text-szText">
      <div className="navbar-start">
        <div className="dropdown">
          {/* Al hacer clic, el menú se abre o se cierra */}
          <div tabIndex={0} role="button" aria-label="Toggle Menu" className="lg:hidden" onClick={toggleMenu}>
            <AnimatedMenuIcon isOpen={menuOpen} /> {/* Pasamos el estado al ícono */}
          </div>

          {/* Dropdown menu controlado */}
          {menuOpen && (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li><a href="#">Item 1</a></li>
              <li>
                <a href="#">Parent</a>
                <ul className="p-2">
                  <li><a href="#">Submenu 1</a></li>
                  <li><a href="#">Submenu 2</a></li>
                </ul>
              </li>
              <li><a href="#">Item 3</a></li>
            </ul>
          )}
        </div>
        <img src={logo} alt="Logo" className="logo" />
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a href="#">Item 1</a></li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <li><a href="#">Submenu 1</a></li>
                <li><a href="#">Submenu 2</a></li>
              </ul>
            </details>
          </li>
          <li><a href="#">Item 3</a></li>
        </ul>
      </div>

      <div className="navbar-end">
        <a href="#" className="btn">Button</a>
      </div>
    </div>
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
