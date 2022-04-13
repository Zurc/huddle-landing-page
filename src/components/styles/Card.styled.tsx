import styled from 'styled-components';

interface ICard {
  direction: string;
}

export const StyledCard = styled.div<ICard>`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.body};
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 40px 0;
  padding: 30px;
  line-height: 1.5em;
  text-align: center;
  font-size: 0.8em;
  font-width: 500;

  .body {
    h2 {
      color: hsl(192, 100%, 9%);
    }
    p {
      color: hsl(208, 11%, 55%);
    }
  }

  .image {
    margin-bottom: 40px;
    width: 90%;
  }

  &:last-child {
    margin-bottom: 150px;
  }

  @media (min-width: ${({ theme }) => theme.layout.mobile}) {
    flex-direction: ${({ direction }) => direction};
    justify-content: space-between;
    text-align: left;
    font-size: 1em;

    .body {
      width: 90%;
      padding: 80px;
    }

    .image {
      display: flex;
      flex-direction: ${({ direction }) => direction};

      & img {
        width: 70%;
        margin: ${({ direction }) =>
          direction === 'row' ? '0 0 0 auto' : '0 80px 0 0'};
      }
    }

    &:first-child {
      margin-top: 150px;
    }
    &:last-child {
      margin-bottom: 300px;
    }
  } ;
`;
