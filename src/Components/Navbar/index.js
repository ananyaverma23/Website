import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import the close icon as well
import Logo2 from '../../images/Logo3.png';
import {
  Nav,
  NavbarContainer,
  NavImg,
  NavMenu,
  Navitem,
  NavLinks,
  MobileIcon,
  NavLogo,
  SubLogo,
} from './NavbarElements';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLogoClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavImg>
            <Link to="/" onClick={handleLogoClick}> 
              <img src={Logo2} height={44} alt="Logo" />
            </Link>
            <NavLogo>
              AssetMantle
              <SubLogo>Student Chapter IGDTUW</SubLogo>
            </NavLogo>
          </NavImg>

          <MobileIcon onClick={toggle}>
            {isOpen ? <FaTimes /> : <FaBars />} {/* Close icon when open */}
          </MobileIcon>
          <NavMenu isOpen={isOpen}>
            <Navitem>
              <NavLinks to="/">ABOUT</NavLinks>
            </Navitem>
            <Navitem>
              <NavLinks to="/event">EVENTS</NavLinks>
            </Navitem>

            <Navitem>
              <NavLinks to="/TeamPage">TEAM</NavLinks>
            </Navitem>
            <Navitem>
              <NavLinks to="/faq">FAQS</NavLinks>
            </Navitem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;

