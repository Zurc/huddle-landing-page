import { Button } from './styles/Button.styled';
import { Container } from './styles/Container.styled';
import { StyledHeader, Nav, Logo, Hero } from './styles/Header.styled';

export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src={'./images/logo.svg'} alt="huddle" />
          <Button>Try It Free</Button>
        </Nav>
        <Hero>
          <div className="body">
            <h1>Build The Community Your Fans Will Love</h1>
            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does you audience. Create connections with your users as
              you engage in genuine discussion.
            </p>
            <Button bg="hsl(322, 100%, 66%)" color="white">
              Get Started For Free
            </Button>
          </div>
          <div>
            <img src={'./images/illustration-mockups.svg'} alt="huddle" />
          </div>
        </Hero>
      </Container>
    </StyledHeader>
  );
}
