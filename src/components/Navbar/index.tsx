import React, { useState } from 'react';
import { INavbarProps } from './types';
import { NavbarContainer, Logo, LinksContainer, NavLink, MobileMenuIcon, MobileLinksContainer } from './styles';

const Navbar = ({ logo, links }: INavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <NavbarContainer>
      {logo && <Logo src={logo} alt="logo" />}
      <LinksContainer>
        {links.map((link, index) => (
          <NavLink key={index} href={link.href}>{link.label}</NavLink>
        ))}
      </LinksContainer>
      <MobileMenuIcon onClick={toggleMobileMenu}>        
        ☰
      </MobileMenuIcon>
      {isMobileMenuOpen && (
        <MobileLinksContainer>
          {links.map((link, index) => (
            <NavLink key={index} href={link.href}>{link.label}</NavLink>
          ))}
        </MobileLinksContainer>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
