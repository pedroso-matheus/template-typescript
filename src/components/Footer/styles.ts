// styles.ts

import styled from 'styled-components';

export const Logo = styled.img`
  height: 20px; 
  width: auto;
  padding: 20px;
`;

//background-image: linear-gradient(to bottom, #2d5176, black);

export const FooterContainer = styled.footer`
  background-color: #fff;
  text-align: center;
  padding: 40px 10px;
  margin-top: 20px;
`;

export const CopyrightText = styled.p`
  margin: 0;
  padding: 10px 0;
`;

export const SocialLinksContainer = styled.div`
  margin: 10px 0;
`;

export const SocialLink = styled.a`
  margin: 0 10px;
  text-decoration: none;

  &:hover {
    color: #e16a3d;
  }
`;
