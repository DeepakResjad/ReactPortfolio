import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('');

  const handleNavLinkClick = (path) => {
    setActiveLink(path);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">Deepak<span>.</span></div>
        <div className="space-x-4">
          <NavLink
            to="/ReactPortfolio"
            exact
            onClick={() => handleNavLinkClick('/ReactPortfolio')}
            className={`text-gray-300 hover:text-white cursor-pointer ${activeLink === '/ReactPortfolio' ? 'underline' : ''}`}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => handleNavLinkClick('/about')}
            className={`text-gray-300 hover:text-white cursor-pointer ${activeLink === '/about' ? 'underline' : ''}`}
          >
            About
          </NavLink>
          <NavLink
            to="/project"
            onClick={() => handleNavLinkClick('/project')}
            className={`text-gray-300 hover:text-white cursor-pointer ${activeLink === '/project' ? 'underline' : ''}`}
          >
            Education &amp; Work experience
          </NavLink>
          <NavLink
            to="/skills"
            onClick={() => handleNavLinkClick('/skills')}
            className={`text-gray-300 hover:text-white cursor-pointer ${activeLink === '/skills' ? 'underline' : ''}`}
          >
            Technical skills
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => handleNavLinkClick('/contact')}
            className={`text-gray-300 hover:text-white cursor-pointer ${activeLink === '/contact' ? 'underline' : ''}`}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
