import styled from 'styled-components';

interface IBtn {
  bg?: string;
  color?: string;
}

export const Button = styled.button<IBtn>`
  background: ${({ bg }) => bg || '#fff'};
  color: ${({ color }) => color || '#333'};
  padding: 10px 60px;
  border: none;
  border-radius: 60px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 12px;
  font-weight: 400;

  &:hover {
    opacity: 0.9;
    transform: scale(0.95);
  }

  @media (min-width: ${({ theme }) => theme.layout.mobile}) {
    margin-top: 0;
    padding: 15px 60px;
  } ;
`;
