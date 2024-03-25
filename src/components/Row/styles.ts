import styled from 'styled-components';
import { IRowStyled } from './types';

export const RowContainer = styled.div<IRowStyled>`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 10px 0px;
  justify-content: ${props => props.$justify || 'flex-start'};
`;
