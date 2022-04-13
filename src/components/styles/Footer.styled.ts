import styled from 'styled-components';

export const StyledFooter = styled.footer`
  padding-top: 150px;
  background: ${({ theme }) => theme.colors.footer};
  color: white;
  margin-bottom: -20px;
  text-align: left;
  font-size: 18px;
  font-weight: 300;
  z-index: 1;

  img {
    width: 200px;
    margin-bottom: 20px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    line-height: 1.5;
    opacity: 0.8;
    margin-bottom: 1em;
  }

  p {
    display: flex;
    flex-direction: row-reverse;
    padding-bottom: 60px;
    text-align: center;
  }

  @media (min-width: ${({ theme }) => theme.layout.mobile}) {
    text-align: left;
    .first-col {
      display: flex;
      flex-direction: column;
      flex: 2;
      margin-right: 100px;
    }
    p {
      text-align: left;
    }
  } ;
`;
