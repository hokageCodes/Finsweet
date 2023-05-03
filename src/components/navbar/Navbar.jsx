import { useState } from 'react';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import './navbar.css';

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  const handleToggle = () => {
    setShowLinks(!showLinks);
  };
  const handleLinkClick = () => {
    setShowLinks(false);
  };

  return (
    <nav className='nav__container'>
      <h2 className='nav__logo'>Finsweet</h2>
      <div>
        <ul className={`nav__links ${showLinks ? 'show' : ''}`}>
          <li>Home</li>
          <li>Service</li>
          <li>Company</li>
          <li>Career</li>
          <li>Blog</li>
          <li>Contact Us</li>
          <div className='cta__link'>
            <a href='/'>Clone project</a>
            <HiOutlineArrowNarrowRight className='arrow' />
          </div>
        </ul>
        <div className='nav__hamburger' onClick={handleToggle}>
          <HiOutlineMenu />
        </div>
        <div className='nav__close' onClick={handleToggle}>
          <HiOutlineX />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
