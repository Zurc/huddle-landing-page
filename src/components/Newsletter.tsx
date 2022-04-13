import { Button } from './styles/Button.styled';
import { StyledNewsletter } from './styles/Newsletter.styled';

export default function Newsletter() {
  return (
    <StyledNewsletter>
      <h1>Ready To Build Your Community?</h1>
      <Button bg="hsl(322, 100%, 66%)" color="white">
        Get Started For Free
      </Button>
    </StyledNewsletter>
  );
}
