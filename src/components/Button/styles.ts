import styled from 'styled-components';
import { IButtonProps } from './types';


export const StyledButton = styled.button<IButtonProps>`
  background-color: ${(props) => props.$backgroundColor || '#00172f'};
  color: ${(props) => props.color || '#fff'};
  border: 2px solid ${(props) => props.$borderColor || props.$backgroundColor};
  padding: 15px 25px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s, color 0.3s;
  border-radius: 10px;

  &:hover {
    opacity: 0.8; 
  }
`;
