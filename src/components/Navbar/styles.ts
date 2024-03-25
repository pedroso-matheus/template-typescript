import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 60px;
  background-color: #2d5176;
  color: #fff;

  @media (max-width: 768px) {
    padding: 10px 30px;
  }

`;

export const Logo = styled.img`
  height: 20px; 
  width: auto;
`;

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none; // Esconde os links em dispositivos móveis
  }
`;

export const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-left: 20px;

  &:hover {
    text-decoration: underline;
  }
`;

export const MobileMenuIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
    }
`;

export const MobileLinksContainer = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  background-color: #333;
  position: absolute;
  width: 100%;
  top: 60px; // Ajuste baseado na altura do Navbar

  @media (max-width: 768px) {
    display: flex;
  }
`;


