import { useState } from 'react';

const AnimatedMenuIcon = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      onClick={toggleMenu}
      className="flex flex-col items-center justify-center space-y-1 cursor-pointer"
    >
      <div
        className={`h-1 w-6 bg-szText transition-transform duration-300 ease-in-out ${
          isOpen ? 'transform translate-y-2 rotate-45' : ''
        }`}
      />
      <div
        className={`h-1 w-6 bg-szText transition-opacity duration-300 ease-in-out ${
          isOpen ? 'opacity-0' : 'opacity-100'
        }`}
      />
      <div
        className={`h-1 w-6 bg-szText transition-transform duration-300 ease-in-out ${
          isOpen ? 'transform -translate-y-2 -rotate-45' : ''
        }`}
      />
    </div>
  );
};

export default AnimatedMenuIcon;
