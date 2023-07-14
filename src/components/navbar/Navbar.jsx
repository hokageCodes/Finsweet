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
        <ul onClick={handleLinkClick} className={`nav__links ${showLinks ? 'show' : ''}`}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/services">Service</a>
          </li>
          <li>
            <a href="/company">Company</a>
          </li>
          <li>
            <a href="/careers">Careers</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li>
            <a href="/contact">Contact Us</a>
          </li>
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
