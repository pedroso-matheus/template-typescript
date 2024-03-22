// src/components/Container.tsx
import React from 'react';

import { StyledWrapper } from './styles'; 
import { IWrapper } from './types';

const Wrapper = ( { children, padding, margin } : IWrapper ) => {
  return <StyledWrapper padding={padding} margin={margin}>{children}</StyledWrapper>;
};

export default Wrapper;