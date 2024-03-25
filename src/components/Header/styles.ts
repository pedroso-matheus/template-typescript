
import styled from 'styled-components';

import { IHeaderProps } from './types';

export const HeaderContainer = styled.header<IHeaderProps>`
  background-image: url(${props => props.$imageUrl});
  background-size: cover;
  background-position: center;
  min-height: ${props => props.$minHeight || '100px'};
  background-color: ${props => props.$backgroundColor || 'transparent'};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;