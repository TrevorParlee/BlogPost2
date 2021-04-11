import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import './NavBar.css';

function NavBar() {
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
      <nav className='navBar'>
        <div className='navBarContainer'>
          <Link to='/' className='title' onClick={closeMobileMenu}>
            Blog Post 2
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu-active' : 'nav-menu'}>
            <li className='navItem'>
              <Link to='/' className='navLinks' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='navItem'>
              <Link to='/blog' className='navLinks' onClick={closeMobileMenu}>
                Blog Post
              </Link>
            </li>
            <li className='navItem'>
              <Link
                to='/projects'
                className='navLinks'
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
