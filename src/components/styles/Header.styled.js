import styled from 'styled-components';

export const StyledHeader = styled.header`
  background: ${({ theme }) => theme.colors.header};
  background-image: url('./images/bg-hero-mobile.svg');
  background-size: auto auto;
  overflow: hidden;

  @media (min-width: ${({ theme }) => theme.layout.mobile}) {
    background-image: url('./images/bg-hero-desktop.svg');
  } ;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5em 0;

  & button {
    padding: 0.5em 2em;
    font-size: 12px;
    font-weight: 700;
  }

  @media (min-width: ${({ theme }) => theme.layout.mobile}) {
    padding: 2.5em 0;

    & button {
      padding: 1em 5em;
      font-size: 14px;
      font-weight: 700;
    }
  } ;
`;

export const Logo = styled.img`
  width: 30%;
  max-width: 200px;
`;

// export const Img = styled.img`
//   margin: 50px 0 0;
// `;

export const Hero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1em;

  h1 {
    font-size: 1.5rem;
    line-height: 1.5;
    margin: 1.5em 0;
    font-weight: 600;
  }

  p {
    font-size: 1.05rem;
    line-height: 1.5;
    font-weight: 400;
    margin-bottom: 30px;
  }

  img {
    margin: 50px 0 0;
  }

  .body {
    width: 100%;
  }

  @media (min-width: ${({ theme }) => theme.layout.mobile}) {
    flex-direction: row;
    text-align: left;
    padding: 1em 0;

    h1 {
      font-size: 2.5rem;
      line-height: 1.5;
      font-weight: 600;
      margin: 0 60px 0 0;
    }

    p {
      margin-right: 80px;
    }

    .body {
      width: 60%;
    }

    img {
      margin: 0;
      width: 100%;
      padding: 0 0 40px 40px;
    }
  } ;
`;
