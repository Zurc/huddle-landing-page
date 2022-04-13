import styled from 'styled-components';

export const StyledNewsletter = styled.div`
  background: white;
  padding: 2em 1em;
  border-radius: 10px;
  margin: 0 auto;
  margin-bottom: -100px;
  text-align: center;
  z-index: 10;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);

  h1 {
    font-size: 0.9em;
    line-height: 1.2;
  }

  @media (min-width: ${({ theme }) => theme.layout.mobile}) {
    width: 50%;
    padding: 1em 1em 2em;
    margin-top: 150px;
    margin-bottom: -250px;

    h1 {
      font-size: 1.5em;
      padding-bottom: 1em;
    }
  } ;
`;
