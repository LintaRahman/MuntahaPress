import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import logo from '../../assets/images/MuntahaWhite.png'
import { Link , useLocation} from 'react-router-dom';

const Nav = styled.nav`
  width: 100%;
  height: 50px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  // background: ${({ navbar }) => (navbar ? 'rgba(28, 44, 71, 0.95)' : 'transparent')};
  // background: rgba(28, 44, 71, 1);
    background: ${({ isHome, navbar }) => 
    isHome 
      ? (navbar ? 'rgba(28, 44, 71, 0.95)' : 'transparent')
      : 'rgba(28, 44, 71, 0.95)'
  };
  
  color: white;
  // background: white;
  // color: var(--color-primary);
  z-index: 300;
  transition: all 0.3s ease;
  font-size: 0.95rem;

  .logo img{
    // padding: 18px 18px;
    // font-weight: 800;
    // font-size: 1.5rem;
    // text-transform: uppercase;
    height: 100%;
    max-height: 150px;
  }
`;

const Navbar = ({scrollVal = 25}) => {
  const [navbar, setNavbar] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= scrollVal) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };

    window.addEventListener('scroll', changeBackground);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []); // Empty dependency array ensures the effect runs once on mount

  return (
    <Nav navbar={navbar} isHome={isHome}>
      <div className="logo">
  <Link to='/'><img src={logo} alt="logo" /></Link>
</div>

      {/* <div className="logo"><img src={logo} alt="" /></div> */}
      <Burger />
    </Nav>
  );
};

export default Navbar;