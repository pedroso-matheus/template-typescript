import React from 'react';

import { HeaderContainer } from './styles';
import { IHeader } from './types';

const Header = ({  title, imageUrl, minHeight, backgroundColor }: IHeader) => {
  return (
    <HeaderContainer $imageUrl={imageUrl} $minHeight={minHeight} $backgroundColor={backgroundColor}>
      {title && <h1>{title}</h1>}
    </HeaderContainer>
  );
};

export default Header;