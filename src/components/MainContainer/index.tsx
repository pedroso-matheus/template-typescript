// src/components/Container.tsx
import React from 'react';

import { StyledMainContainer } from './styles'; 
import { IMainContainer } from './types';

const MainContainer = ( { children } : IMainContainer ) => {
  return <StyledMainContainer>{children}</StyledMainContainer>;
};

export default MainContainer;