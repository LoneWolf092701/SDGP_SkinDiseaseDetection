import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import logo from '../Images/Logo1.png';
import HowItWorks from '../HowItWorks/HowItWorks';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <img src={logo} className='app-logo' alt='logo' />
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/HowItWorks'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                How It Works
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Medicines
              </Link>
            </li>
            {button && (
              <li className='nav-item'>
                <Link
                  to='/Login'
                  className='nav-links-mobile'
                  onClick={closeMobileMenu}
                >
                  Login / SignUp
                </Link>
              </li>
            )}
          </ul>
          {button && <Button buttonStyle='btn--outline'>Login / SignUp</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
