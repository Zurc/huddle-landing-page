import styled from 'styled-components';

interface IContainer {
  context?: string;
}

export const Container = styled.div<IContainer>`
  position: relative;
  width: 1280px;
  max-width: 100%;
  padding: 20px;
  margin: 0 auto;
  z-index: 0;

  @media (min-width: ${({ theme }) => theme.layout.mobile}) {
    padding: ${({ context }) =>
      context === 'main-content' ? '0 0 150px 0' : '0'};
  } ;
`;
