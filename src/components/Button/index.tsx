import React from 'react';
import { StyledButton } from './styles';
import { IButton } from './types';

import { Link } from 'react-router-dom';

const Button = ({ href, label, backgroundColor, color, borderColor }: IButton) => {

  let handleHref: string;
  let handleLabel: string;

  href ? handleHref=href : handleHref="/";  

  label ? handleLabel=label : handleLabel="botao";
    
  return (
    <Link to={handleHref}>
        <StyledButton $backgroundColor={backgroundColor} $color={color} $borderColor={borderColor}>
        {handleLabel}
        </StyledButton>
    </Link>
  );
};

export default Button;
