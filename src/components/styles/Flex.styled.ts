import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > div,
  & > ul {
    flex: 1;
  }

  @media (min-width: ${({ theme }) => theme.layout.mobile}) {
    flex-direction: row;
  } ;
`;
