import React from 'react';
import { Logo, FooterContainer, CopyrightText, SocialLinksContainer, SocialLink } from './styles';

import { IFooter } from './types';

const Footer = ( {logo, brand, instagram, linkedin, twitter, github}: IFooter ) => {
  return (
    <FooterContainer>
      <div>
          {logo && <Logo src={logo} alt="logo" />}
      </div>
      <SocialLinksContainer>        
        { github && <SocialLink href={github} target="_blank" rel="noopener noreferrer"> Instagram </SocialLink> }
        { linkedin && <SocialLink href={linkedin} target="_blank" rel="noopener noreferrer"> Instagram </SocialLink> }
        { instagram && <SocialLink href={instagram} target="_blank" rel="noopener noreferrer"> Instagram </SocialLink> }
        { twitter && <SocialLink href={twitter} target="_blank" rel="noopener noreferrer"> Instagram </SocialLink> }
      </SocialLinksContainer>
      <div>
        {/* Aqui você pode adicionar links úteis ou informações de contato */}
      </div>
      <div>
        {/* Outros recursos comuns do rodapé */}
      </div>
      <CopyrightText>
        © {brand && " "+brand} {new Date().getFullYear()}
        <br></br><br></br> Todos os direitos reservados.
      </CopyrightText>
    </FooterContainer>
  );
};

export default Footer;
